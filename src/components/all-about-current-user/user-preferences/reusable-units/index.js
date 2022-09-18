import React from 'react'

let DropDown = ({data}) => {
    let messageOption = ["Always", "Only when away", "Never"]
    let renderOptions = () => (data || messageOption).map(name => <RenderOption key={name} name={name} />)
    return (
        <select>
            {renderOptions()}
        </select>
    )
}

let RenderOption = ({name}) => {
    return <option>{name}</option>
}

let CheckBox = ({text, cbId, handleClicked}) => {
    return (
        <div className='cb-wrapper'>
            <input type={'checkbox'} id={cbId} onClick={handleClicked} />
            <label htmlFor={cbId}>{text}</label>
        </div>
        
    )
}

let AdditionalInformation = ({text}) => <p className='ai-wrapper'>{text}</p>

let SettingsExplanation = ({text}) => {
    return <p>{text}</p>
}

export {DropDown, CheckBox, AdditionalInformation, SettingsExplanation}