import { faBell, faPlus, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import './styles.css'
import {UserContext} from '../../App'
import { CreateNewTopic } from '../create-a-new-topic'

function TopicTagCategoryHeader({ categoryName, setAllStates }) {
    return (
        <section aria-label='topic tag category header' className='ttch-container'>
            <CurrentTopicTagCategory categoryName={categoryName} />
            <NavigationBar />
            <NavigationControls setAllStates={setAllStates} />
        </section>
    )
}

let NavigationControls = ({setAllStates}) => {
    let [showModal, setShowModal] = useState(false)
    let toggleShowModal = evt => {
        setShowModal(!showModal)
        // console.log(evt.target, 'herejhere')
    }
    return (
        <div className='navigation-controls'>
            <CreateTopic toggleShowModal={toggleShowModal} />
            <NotificationBell />
            {showModal && <CreateNewTopic closeModal={toggleShowModal} setAllStates={setAllStates} />}
        </div>
    )
}

let NotificationBell = () => {
    return (
        <details aria-label='notification bell'>
            <summary aria-label='change notification level for this category'>
                <FontAwesomeIcon icon={faBell} />
            </summary>
        </details>
    )
}

let CreateTopic = ({toggleShowModal}) => {
    return (
        <button className='create-topic' onClick={toggleShowModal}>
            <FontAwesomeIcon icon={faPlus} />
            <span>New Topic</span>
        </button>
    )
}

let CurrentTopicTagCategory = ({ categoryName }) => {
    let [showLists, setShowLists] = useState(false)
    let handleClick = evt => setShowLists(!showLists)
    return (
        <ol className='cttc-wrapper'>
            <li onClick={handleClick}>
                <span>{categoryName}</span>
                <FontAwesomeIcon icon={faCaretRight} className={showLists ? 'active' : 'inactive'} />
            </li>
            {/* {showLists && <ShowAllAvailableTags setShowLists={setShowLists} showLists={showLists} />} */}
            <ShowAllAvailableTags setShowLists={setShowLists} showLists={showLists} />
        </ol>
    )
}

let ShowAllAvailableTags = ({setShowLists, showLists}) => {
    let allStates = useContext(UserContext)
    let renderListItems = () => allStates.categoriesInfo?.map(item => <li key={item.name}><span className='tag-name'>{item.name}</span><FontAwesomeIcon icon={faCaretRight} /><span>{item.topics}</span></li>)
    return (
        <ul className={`tags-list ${showLists ? 'show' : 'hide'}`}>
            {renderListItems()}
        </ul>
    )
}

let NavigationBar = () => {
    let showNavs = () => labels.map(name => <li key={name} className='nav-item'><a className='nav-link' href='http://localhost:3000/public-forum-an-attempt/category' target={'_blank'}>{name}</a></li>)
    return (
        <ul className='navs-view'>
            {showNavs()}
        </ul>
    )
}

let labels = ['Latest', 'Top', 'Leaderboard']

export default TopicTagCategoryHeader