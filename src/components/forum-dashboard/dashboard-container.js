import React from 'react'
import { ForumDashboardHeaderUI } from './header-ui'
import { LatestUserInteractionsContainer } from './latest-user-interactions-container'
import { DashboardPanelLeftSide } from './left-side-ui'

function DashboardContainer() {
  return (
    <div className='dashboard-container'>
      <ForumDashboardHeaderUI />
      <ForumDashboardMainView />
    </div>
  )
}

let ForumDashboardMainView = () => {
  return(
    <div className='dashboard-main-view-conatiner' style={{display: 'flex', justifyContent: 'space-around'}}>
      <DashboardPanelLeftSide />
      <LatestUserInteractionsContainer />
    </div>
  )
}

export default DashboardContainer