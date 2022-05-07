import React, { useContext, useState } from 'react'
import { UserContext } from '../../components-container'
import { RenderListOfElements } from '../../general-purpose-use-hof';
import { CreateNewTopic } from '../create-a-new-topic';
import './styles.css'

export function ForumDashboardHeaderUI() {
  let [showModal, setShowModal] = useState(false);
  
  let allStates = useContext(UserContext);
  
  let listLabels = () => allStates.headerLables && <RenderListOfElements list={allStates.headerLables} wrapperClassName='rest-labels' elementClassName={'header-label'} />
  
  let toggleShowModal = () => setShowModal(!showModal)

  return (
    <nav aria-label='dashboard-header-category-navigation' className='dahsboard-header-ui-container'>
      <div className='categories-labels'>
        <div className='all-categories-label'>All Categories</div>
        {listLabels()}
      </div>
      <button aria-label='new topic' id='new-topic' onClick={toggleShowModal}>New Topic</button>
      {showModal && <CreateNewTopic />}
    </nav>
  )
}