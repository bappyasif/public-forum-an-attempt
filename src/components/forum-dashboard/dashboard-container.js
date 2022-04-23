import React from 'react'
import { ForumDashboardHeaderUI } from './header-ui'
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
    <div className='dashboard-main-view-conatiner'>
      <DashboardPanelLeftSide />
    </div>
  )
}

export default DashboardContainer