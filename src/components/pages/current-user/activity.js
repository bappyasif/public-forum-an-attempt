import React, { useState } from 'react'
import AllTopicsEngaggedWith from '../../all-about-current-user/about-activity/all-topics-engagged-with'
import LeftSideNavigationPanel from '../../all-about-current-user/about-activity/left-side-nav-panel'
import CollapsedInfo from '../../all-about-current-user/collapsed-info'
import ExtendedView from '../../all-about-current-user/collapsed-info/extended-view'
import PrimaryNavigation from '../../all-about-current-user/primary-navigation'
import HeaderUI from '../../header-section'

function ActivityDetails({ setAllStates }) {
    let [expanded, setExpanded] = useState(false)
    let handleToggle = () => setExpanded(!expanded)

    return (
        <main>
            <HeaderUI setAllStates={setAllStates} />
            <div style={{ width: '69vw', margin: '72px auto' }}>
                <CollapsedInfo expanded={expanded} handleToggle={handleToggle} />
                {expanded ? <ExtendedView /> : null}
                <PrimaryNavigation />
                <div style={{display: 'flex'}}>
                    <LeftSideNavigationPanel />
                    <AllTopicsEngaggedWith />
                </div>
            </div>
        </main>
    )
}

export default ActivityDetails