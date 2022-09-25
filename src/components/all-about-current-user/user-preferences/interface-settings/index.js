import React from 'react';
import { DropDown } from '../reusable-units';
import './styles.css';

function InterfaceSettings() {
    let homeOptions = ["Subforums", "Latest", "Top"];
    let themeOptions = ["Dawn Theme", "Day Theme", "Night Theme", "Staff Debug"];
    let textOptions = ["Smallest", "Smaller", "Normal", "Larger", "Largest"];
    let languageOptions = ["catala", "cestina", "dansk", "Deutsch", "English (US)", "English (UK)", "Espanol", "eesti", "suomi", "עברית", "Magyar", "Հայերեն", "Indonisian", "Italiano", "Norsk bokmal", "Netherlands", "Polski", "Portuguese", "Shqip", "Kiswahili", "Viet Nam"]

    return (
        <div className='is-container'>
            {/* <ThemeSettings />
        <DefaultHomePage /> */}
            <ShowDropdowns title={"Theme"} options={themeOptions} />

            <ShowDropdowns title={"Text Size"} options={textOptions} />

            <ShowDropdowns title={"Interface Language"} options={languageOptions} />

            <ShowDropdowns title={"Default Home Page"} options={homeOptions} />

            <OtherSettings />

            <button>Save Changes</button>
        </div>
    )
}

let OtherSettings = () => {
    let options = [
        "Open all external links in a new tab",
        "Enable quote reply for highlighted text",
        "Enable defer to mark topics unread",
        "Automatically unpin topics when I reach the bottom",
        "Hide my public profile and presence features",
        "Show counts on browser icon",
        "Background page title displays count of:",
        "Skip new user onboarding tips and badges"
    ]

    let renderOptions = () => options.map((option, indx) => <RenderOption key={indx} option={option} index={indx} />)

    return (
        <ul className='ds-wrapper'>
            {renderOptions()}
        </ul>
    )
}

let RenderOption = ({ option, index }) => {
    return (
        index != 6
            ?
            <li>
                <label className='form-control'>
                    <input type={"checkbox"} />
                    <span>{option}</span>
                </label>
            </li>
            :
            <ShowNotificationSettingDropdown title={option} />
    )
}

let ShowNotificationSettingDropdown = ({ title }) => {
    let options = ["New notifications", "New page content"];
    let renderOptions = () => options.map(option => <option key={option}>{option}</option>)
    return (
        <div className='snsd-wrapper'>
            <p>{title}</p>
            <div className='select-div'>
                <select>
                    {renderOptions()}
                </select>
            </div>
        </div>
    )
}

let ShowDropdowns = ({ title, options }) => {
    return (
        <div className='sd-wrapper'>
            <h2>{title}</h2>
            <DropDown data={options} />
        </div>
    )
}

let DefaultHomePage = () => {
    let data = ["Subforums", "Latest", "Top"]
    return (
        <div className='dhp-wrapper'>
            <h2>Default Home Page</h2>
            <DropDown data={data} />
        </div>
    )
}

let ThemeSettings = () => {
    let data = ["Dawn Theme", "Day Theme", "Night Theme", "Staff Debug"]
    return (
        <div className='ts-wrapper'>
            <h2>Theme</h2>
            <DropDown data={data} />
        </div>
    )
}

export default InterfaceSettings