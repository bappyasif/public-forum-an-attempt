import React, { useContext } from 'react'
import { UserContext } from '../../components-container'
import { RenderListOfElements } from '../../general-purpose-use-hof';
import './styles.css'

export function ForumDashboardHeaderUI() {
    let allStates = useContext(UserContext);
    let listLabels = () => allStates.headerLables && <RenderListOfElements list={allStates.headerLables} wrapperClassName='rest-labels' elementClassName={'header-label'} />

  return (
    <nav aria-label='dashboard-header-category-navigation' className='dahsboard-header-ui-container'>
        <div className='all-categories-label'>All Categories</div>
        {listLabels()}
    </nav>
  )
}