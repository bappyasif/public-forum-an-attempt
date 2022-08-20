import React from 'react'
import PrimaryNavigation from '../../all-about-current-user/primary-navigation'
import UserPreferences from '../../all-about-current-user/user-preferences'
import HeaderUI from '../../header-section'

function PreferencesDetails({setAllStates}) {
    return (
        <main>
            <HeaderUI setAllStates={setAllStates} />
            <div style={{ width: '69vw', margin: '72px auto' }}>
                <PrimaryNavigation />
                <UserPreferences />
            </div>
        </main>
    )
}

export default PreferencesDetails