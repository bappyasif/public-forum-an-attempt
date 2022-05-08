import React, { useContext, useRef, useState } from 'react'
import plusPng from '../../assets/plus.png'
import downArrow from '../../assets/down-arrow.png'
import { UserContext } from '../../components-container'
import './styles.css'
import { useOnClickOutside } from '../../hooks'
import MDEditor from '@uiw/react-md-editor'

export function CreateNewTopic({closeModal}) {
    return (
        <div className='create-a-new-topic'>
            <HeaderElement />
            <TopicTitleAndTags />
            <MarkDownTextEditor />
            <TopicFooter closeModal={closeModal} />
        </div>
    )
}

let TopicFooter = ({closeModal}) => {
    return (
        <div className='footer-container'>
            <button onClick={closeModal}>
                <img src={plusPng} alt='plus sign to create a topic' />
                <div>Create Topic</div>
            </button>
            <div onClick={closeModal}>Cancel</div>
        </div>
    )
}

let MarkDownTextEditor = () => {
    let [value, setValue] = useState('')

    return (
        <MDEditor value={value} onChange={setValue} >
            <MDEditor.Markdown source={value} />
        </MDEditor>
        // <div className='mark-down-editor-container'>
        //     <MDEditor value={value} onChange={setValue} >
        //         <MDEditor.Markdown source={value} />
        //     </MDEditor>
        // </div>
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
        <option aria-labelledby={option} value={option} onClick={handleOption}>{option}</option>
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