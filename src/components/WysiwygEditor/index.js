import MDEditor from '@uiw/react-md-editor'
import React, { useEffect, useState } from 'react'

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

export default WysiwygEditor