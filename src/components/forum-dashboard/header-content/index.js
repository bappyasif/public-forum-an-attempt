import React, { useContext, useState } from 'react'
import { UserContext } from '../../../App';
import { CreateNewTopic } from '../../create-a-new-topic';
import { RenderListOfElements } from '../../general-purpose-use-hof';

import './styles.css'

export function ForumDashboardHeaderUI({ setAllStates }) {
  let [showModal, setShowModal] = useState(false);

  let allStates = useContext(UserContext);

  let listLabels = () => allStates.headerLables && <RenderListOfElements list={allStates.headerLables} wrapperClassName='rest-labels' elementClassName={'header-label'} setAllStates={setAllStates} />

  let toggleShowModal = () => setShowModal(!showModal)

  return (
    <section aria-label='dashboard-header-topics-navigation' className='dahsboard-header-ui-container'>
      <div className='categories-labels'>
        <div role={'button'} className='all-categories-label' tabIndex={'0'}>All Categories</div>
        <nav aria-label='topic navigation'>
          {listLabels()}
        </nav>
      </div>
      <button aria-label='new topic' id='new-topic' onClick={toggleShowModal}>New Topic</button>
      {showModal && <CreateNewTopic closeModal={toggleShowModal} setAllStates={setAllStates} />}
    </section>
  )
}