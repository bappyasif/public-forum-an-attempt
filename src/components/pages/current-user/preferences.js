import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CollapsedInfo from '../../all-about-current-user/collapsed-info'
import ExtendedView from '../../all-about-current-user/collapsed-info/extended-view'
import PrimaryNavigation from '../../all-about-current-user/primary-navigation'
import UserPreferences from '../../all-about-current-user/user-preferences'
import LeftNavigationPanel from '../../all-about-current-user/user-preferences/left-nav-panel'
import HeaderUI from '../../header-section'

function PreferencesDetails({ setAllStates }) {
    let [expanded, setExpanded] = useState(false)
    let handleToggle = () => setExpanded(!expanded)

    return (
        <main>
            <HeaderUI setAllStates={setAllStates} />
            <div style={{ width: '69vw', margin: '72px auto' }}>
                <CollapsedInfo expanded={expanded} handleToggle={handleToggle} />
                {expanded ? <ExtendedView /> : null}
                <PrimaryNavigation />
                <div style={{display: "flex"}}>
                    <LeftNavigationPanel />
                    <UserPreferences />
                </div>
            </div>
        </main>
    )
}

export default PreferencesDetails