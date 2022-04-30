import React, { useContext } from 'react'
import { UserContext } from '../../components-container'
import { RenderListOfElements } from '../../render-list-of-elements'
import './styles.css'


export function DashboardPanelLeftSide() {
  return (
    <aside className='left-side-panel-container'>
        <RenderListOfElements list={["Categories", "Topics"]} wrapperClassName='panel-headers' elementClassName={'headerItem'} />
        <LeftSideDashboardContents />
    </aside>
  )
}

let LeftSideDashboardContents = () => {
    let allStates = useContext(UserContext)
    return (
        <nav className='left-side-contents-container' aria-label='focused categories'>
            <RenderListOfElements list={allStates.categories} wrapperClassName='focused-categories' elementClassName='category-name' />
            <RenderListOfElements list={[1234, 4321, 5678, 8765]} wrapperClassName='topics-nunbers' elementClassName={'topic-number'} />
        </nav>
    )
}