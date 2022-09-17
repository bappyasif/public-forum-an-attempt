import React from 'react'
import './styles.css'

function EmailNotifications() {
  return (
    <div className='en-container'>
        <EmailPreference />
        <ActivitySummary />
        <MailingList />
        <button>Save Changes</button>
    </div>
  )
}

let MailingList = () => {
    return (
        <div className='ml-wrapper'>
            <h2>Mailing list mode</h2>
            <CheckBox text={'Enable mailing list mode'} />
            <AdditionalInformation text={'This setting overrides the activity summary'} />
            <AdditionalInformation text={'Muted topics and categories are not included in these emails.'} />
        </div>
    )
}

let ActivitySummary = () => {
    return (
        <div className='as-wrapper'>
            <h2>Activity Summary</h2>
            <CheckBox text={'When I don’t visit here, send me an email summary of popular topics and replies'} />
            <DropDown />
            <CheckBox text={'Include content from new users in summary emails'} />
        </div>
    )
}

let EmailPreference = () => {    
    return (
        <div className='ep-wrapper'>
            <h2>Email</h2>
            <SettingsExplanation text={'Email me when I am sent a personal message'} />
            <DropDown />
            <SettingsExplanation text={'Email me when I am quoted, replied to, my @username is mentioned, or when there is new activity in my watched categories, tags or topics'} />
            <DropDown />
            <AdditionalInformation />
            <SettingsExplanation text={'Include previous replies at the bottom of emails'} />
            <DropDown />
            <CheckBox text={'Include an excerpt of replied to post in emails'} />
        </div>
    )
}

let CheckBox = ({text}) => {
    return (
        <div className='cb-wrapper'>
            <input type={'checkbox'} id='email' />
            <label htmlFor='email'>{text}</label>
        </div>
        
    )
}

let AdditionalInformation = ({text}) => <p className='ai-wrapper'>{text}</p>

let SettingsExplanation = ({text}) => {
    return <p>{text}</p>
}


let DropDown = () => {
    let messageOption = ["always", "Only when away", "never"]
    let renderOptions = () => messageOption.map(name => <RenderOption key={name} name={name} />)
    return (
        <select>
            {renderOptions()}
        </select>
    )
}

let RenderOption = ({name}) => {
    return <option>{name}</option>
}

export default EmailNotifications