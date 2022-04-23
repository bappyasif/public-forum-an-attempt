import React, { useContext } from 'react'
import { UserContext } from '../../components-container'
import { RenderListOfElements } from '../../utility-functions'
import './css/styles.css'


export function DashboardPanelLeftSide() {
  return (
    <div className='left-side-panel-container'>
        <RenderListOfElements list={["Categories", "Topics"]} wrapperClassName='panel-headers' elementClassName={'headerItem'} />
        <LeftSideDashboardContents />
    </div>
  )
}

let LeftSideDashboardContents = () => {
    let allStates = useContext(UserContext)
    return (
        <div className='left-side-contents-container'>
            <RenderListOfElements list={allStates.categories} wrapperClassName='focused-categories' elementClassName='category-name' />
            <RenderListOfElements list={[1234, 4321, 5678, 8765]} wrapperClassName='topics-nunbers' elementClassName={'topic-number'} />
        </div>
    )
}