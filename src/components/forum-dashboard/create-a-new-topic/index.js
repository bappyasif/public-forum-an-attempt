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
        <section className='create-a-new-topic' aria-label='create a topic modal'>
            <HeaderElement />
            <TopicTitleAndTags />
            <MarkDownTextEditor setMarkdownContents={setMarkdownContents} />
            <TopicFooter createTopic={handleCreateTopic} closeModal={closeModal} handleMarkdownContent={handleMarkdownContent} />
        </section>
    )
}

let TopicFooter = ({createTopic, closeModal, handleMarkdownContent}) => {
    return (
        <div className='footer-container' role={'region'} aria-label='create or cancel topic'>
            <button onClick={createTopic} tabIndex='0' aria-label='create topic'>
                <img src={plusPng} alt='plus sign to create a topic' />
                <div onClick={handleMarkdownContent}>Create Topic</div>
            </button>
            <button role={'button'} onClick={closeModal} tabIndex='0' aria-label='cancel topic'>Cancel</button>
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
        <MDEditor value={value} onChange={setValue}>
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
        <div className='topic-title-and-tags' ref={ref} aria-label='topic title and tags' role={'region'}>
            <TopicTitle />
            <div role={'complementary'} aria-label='choose from this dropdown'>
                <div className='option-selected' aria-label={optionSelected} role='menuitem'>{optionSelected}</div>
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
        <div className='tags-dropdown' aria-label='dropdowns items' role={'menu'}>
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
        <fieldset aria-label='topic title'>
            <label htmlFor='topic-title' aria-label='enter a topic title'></label>
            <input id='topic-title' type={'text'} aria-required='true' placeholder='type title or paste a link here' />
        </fieldset>
    )
}

let HeaderElement = () => {
    return (
        <div className='header-element' role={'button'}>
            <img src={plusPng} alt='depiction for add a new topic' />
            <p>Create a new topic</p>
        </div>
    )
}