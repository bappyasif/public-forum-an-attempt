import React, { useContext } from 'react'
import { UserContext } from '../../components-container'
import { RenderListOfElements } from '../../utility-functions';
import './css/styles.css'

export function ForumDashboardHeaderUI() {
    let allStates = useContext(UserContext);
    let listLabels = () => allStates.headerLables && <RenderListOfElements list={allStates.headerLables} wrapperClassName='rest-labels' elementClassName={'header-label'} />

  return (
    <div className='dahsboard-header-ui-container'>
        <div className='all-categories-label'>All Categories</div>
        <div className='rest-labels'>{listLabels()}</div>
    </div>
  )
}