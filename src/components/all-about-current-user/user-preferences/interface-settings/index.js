import React from 'react';
import { DropDown } from '../reusable-units';
import './styles.css';

function InterfaceSettings() {
  return (
    <div className='is-container'>
        <ThemeSettings />
        <DefaultHomePage />
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