import React from 'react'
import { ForumDashboardHeaderUI } from './header-content'
import { LatestUserInteractionsContainer } from './latest-user-interactions-container'
import { DashboardPanelLeftSide } from './left-side-panel-content'

function DashboardContainer({setAllStates}) {
  return (
    <div className='dashboard-container' style={{margin: '0px 49px'}}>
      <ForumDashboardHeaderUI setAllStates={setAllStates} />
      <ForumDashboardMainView setAllStates={setAllStates} />
    </div>
  )
}

let ForumDashboardMainView = ({setAllStates}) => {
  return(
    <div className='dashboard-main-view-conatiner' style={{display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
      <DashboardPanelLeftSide setAllStates={setAllStates} />
      <LatestUserInteractionsContainer />
    </div>
  )
}

export default DashboardContainer