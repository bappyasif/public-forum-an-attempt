import React from 'react'
import './styles.css'

function LeftNavigationPanel() {
    let renderPanels = () => panelNames.map(name => <RenderPanelName key={name} name={name} />)
    return (
        <aside>
            <ul className='left-panel-nav-list'>
                {renderPanels()}
            </ul>
        </aside>
    )
}

let RenderPanelName = ({ name }) => {
    return (
        <li>{name}</li>
    )
}

let panelNames = ["Account", "Security", "Profile", "Emails", "Interface"];

export default LeftNavigationPanel