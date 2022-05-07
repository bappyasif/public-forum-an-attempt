import React from 'react'
import { ForumDashboardHeaderUI } from './header-content'
import { LatestUserInteractionsContainer } from './latest-user-interactions-container'
import { DashboardPanelLeftSide } from './left-side-panel-content'

function DashboardContainer() {
  return (
    <div className='dashboard-container' style={{margin: '0px 49px'}}>
      <ForumDashboardHeaderUI />
      <ForumDashboardMainView />
    </div>
  )
}

let ForumDashboardMainView = () => {
  return(
    <div className='dashboard-main-view-conatiner' style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'whitesmoke'}}>
      <DashboardPanelLeftSide />
      <LatestUserInteractionsContainer />
    </div>
  )
}

export default DashboardContainer