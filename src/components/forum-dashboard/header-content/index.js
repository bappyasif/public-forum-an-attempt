import React, { useContext } from 'react'
import { UserContext } from '../../components-container'
import { RenderListOfElements } from '../../render-list-of-elements';
// import { RenderListOfElements } from '../../utility-functions';
import './styles.css'

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