import MDEditor from '@uiw/react-md-editor'
import React, { useEffect, useState } from 'react'
import plusPng from '../assets/plus.png'

let WysiwygEditor = ({setMarkdownContents}) => {
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

export let WysiwygModalFooter = ({handleFunctionality, closeModal, handleMarkdownContent}) => {
    return (
        <div className='wysiwyg-modal-footer' role={'region'} aria-label='create or cancel topic'>
            <button className='wysiwyg-modal-button' onClick={handleFunctionality} tabIndex='0' aria-label='create topic'>
                <img src={plusPng} alt='plus sign to create a topic' style={{height: '38px'}} />
                <div onClick={handleMarkdownContent}>Create Topic</div>
            </button>
            <button role={'button'} onClick={closeModal} tabIndex='0' aria-label='cancel topic'>Cancel</button>
        </div>
    )
}

export default WysiwygEditor