import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { baseUri } from '../../../../App'
import './styles.css'

function LeftNavigationPanel() {
    let [currentTab, setCurrentTab] = useState(null)

    let handleCurrentTab = name => setCurrentTab(name)

    let renderPanels = () => panelNames.map(name => <RenderPanelName key={name} name={name} currentTab={currentTab} handleTab={handleCurrentTab} />)
    
    return (
        <aside>
            <ul className='left-panel-nav-list'>
                {renderPanels()}
            </ul>
        </aside>
    )
}

let RenderPanelName = ({ name, currentTab, handleTab }) => {
    let handleClick = () => {
        handleTab(name)
    }
    return (
        <li onClick={handleClick} className={`nav-tab ${currentTab === name ? "active" : ""}`} >{name}</li>
    )
}

let panelNames = ["Account", "Security", "Profile", "Emails", "Interface"];

export default LeftNavigationPanel