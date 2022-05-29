import React, { useContext, useEffect, useRef, useState } from 'react'
import plusPng from '../../assets/plus.png'
import downArrow from '../../assets/down-arrow.png'
import './styles.css'
import { useOnClickOutside } from '../../hooks'
import MDEditor from '@uiw/react-md-editor'
import { useNavigate } from 'react-router-dom'
import { baseUri, handleUpdateStatesValue, UserContext } from '../../../App'

export function CreateNewTopic({closeModal, setAllStates}) {
    // let allStates = useContext(UserContext)
    let navigate = useNavigate()

    let [markdownContents, setMarkdownContents] = useState(null)
    
    let handleMarkdownContent = () => handleUpdateStatesValue(setAllStates, 'markdownIt', markdownContents)

    let handleCreateTopic = () => {
        closeModal()
        // route will come here
        navigate(baseUri + "/topic/22")
    }

    // console.log(markdownContents, allStates, 'from topic')
    return (
        <div className='create-a-new-topic'>
            <HeaderElement />
            <TopicTitleAndTags />
            <MarkDownTextEditor setMarkdownContents={setMarkdownContents} />
            <TopicFooter closeModal={handleCreateTopic} handleMarkdownContent={handleMarkdownContent} />
        </div>
    )
}

let TopicFooter = ({closeModal, handleMarkdownContent}) => {
    return (
        <div className='footer-container'>
            <button onClick={closeModal}>
                <img src={plusPng} alt='plus sign to create a topic' />
                <div onClick={handleMarkdownContent}>Create Topic</div>
            </button>
            <div onClick={closeModal}>Cancel</div>
        </div>
    )
}

let MarkDownTextEditor = ({setMarkdownContents}) => {
    let [value, setValue] = useState('')
    
    useEffect(() => {
        setMarkdownContents(value)
        // eslint-disable-next-line
    }, [value])

    useEffect(() => {
        document.querySelector('textarea')?.setAttribute('aria-label', 'markdown area')
        document.querySelectorAll('.create-a-new-topic svg').forEach(node => node.setAttribute('aria-label', node.parentNode.ariaLabel))
    }, [])

    return (
        <MDEditor value={value} onChange={setValue} >
            <MDEditor.Markdown source={value} />
        </MDEditor>
    )
}

let TopicTitleAndTags = () => {
    let [optionSelected, setOptionSelected] = useState(null);

    let [showDropdowns, setShowDropsowns] = useState(false);

    let toggleDropDowns = () => setShowDropsowns(!showDropdowns);

    let handleOption = evt => {
        setOptionSelected(evt.target.value);
        setShowDropsowns(false);
    }

    let ref = useRef(null);

    useOnClickOutside(ref, () => setShowDropsowns(false))

    return (
        <div className='topic-title-and-tags' ref={ref}>
            <TopicTitle />
            <div>
                <div className='option-selected'>{optionSelected}</div>
                <img src={downArrow} onClick={toggleDropDowns} alt='dropdown arrow' />
            </div>
            {showDropdowns && <AllTagsListDropdown handleOption={handleOption} />}
        </div>
    )
}

let AllTagsListDropdown = ({ handleOption }) => {
    let allStates = useContext(UserContext)
    let allOptions = () => allStates.categoriesInfo?.map(item => <DropdownsOption key={item.name} option={item.name} handleOption={handleOption} />)
    return (
        <div className='tags-dropdown'>
            {allOptions()}
        </div>
    )
}

let DropdownsOption = ({ option, handleOption }) => {
    return (
        <option aria-label={option} value={option} onClick={handleOption}>{option}</option>
    )
}

let TopicTitle = () => {
    return (
        <fieldset>
            <label htmlFor='topic-title'></label>
            <input id='topic-title' type={'text'} aria-required='true' placeholder='type title or paste a link here' />
        </fieldset>
    )
}

let HeaderElement = () => {
    return (
        <div className='header-element'>
            <img src={plusPng} alt='depiction for add a new topic' />
            <p>Create a new topic</p>
        </div>
    )
}