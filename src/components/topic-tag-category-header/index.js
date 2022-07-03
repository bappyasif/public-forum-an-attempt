import { faBell, faPlus, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useRef, useState } from 'react'
import './styles.css'
import { baseUri, handleUpdateStatesValue, UserContext } from '../../App'
import { CreateNewTopic } from '../create-a-new-topic'
import { useOnClickOutside } from '../hooks'
import { Link } from 'react-router-dom'

function TopicTagCategoryHeader({ categoryName, setAllStates }) {
    return (
        <section aria-label='topic tag category header' className='ttch-container'>
            {/* <CurrentTopicTagCategory categoryName={categoryName} updateCategory={updateCategory} /> */}
            <CurrentTopicTagCategory categoryName={categoryName} setAllStates={setAllStates} />
            <NavigationBar setAllStates={setAllStates} />
            <NavigationControls setAllStates={setAllStates} />
        </section>
    )
}

let NavigationControls = ({ setAllStates }) => {
    let [showModal, setShowModal] = useState(false)
    let toggleShowModal = evt => {
        setShowModal(!showModal)
    }
    return (
        <div className='navigation-controls'>
            <CreateTopic toggleShowModal={toggleShowModal} showModal={setShowModal} />
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

let CreateTopic = ({ toggleShowModal, showModal }) => {
    // let ref = useRef();
    // useOnClickOutside(ref, () => showModal(false))
    return (
        <button className='create-topic' onClick={toggleShowModal}>
            <FontAwesomeIcon icon={faPlus} />
            <span>New Topic</span>
        </button>
    )
}

let CurrentTopicTagCategory = ({ categoryName, setAllStates }) => {
    let [showLists, setShowLists] = useState(false)
    let handleClick = evt => setShowLists(!showLists)

    let ref = useRef();
    useOnClickOutside(ref, () => setShowLists(false))

    return (
        <div className='cttc-wrapper' ref={ref}>
            <ol aria-label='currenty showing category name'>
                <li onClick={handleClick} aria-label={'category item'}>
                    <span><h1>{categoryName}</h1></span>
                    <FontAwesomeIcon icon={faCaretRight} className={showLists ? 'active' : 'inactive'} />
                </li>
                {/* {showLists && <ShowAllAvailableTags setShowLists={setShowLists} showLists={showLists} />} */}
                {/* <ShowAllAvailableTags setShowLists={setShowLists} showLists={showLists} updateCategory={updateCategory} /> */}
            </ol>
            {/* <ShowAllAvailableTags setShowLists={setShowLists} showLists={showLists} updateCategory={updateCategory} /> */}
            <ShowAllAvailableTags setShowLists={setShowLists} showLists={showLists} setAllStates={setAllStates} />
        </div>
    )
}

let ShowAllAvailableTags = ({ setShowLists, showLists, setAllStates }) => {
    let allStates = useContext(UserContext)

    // let ref = useRef();
    // useOnClickOutside(ref, () => setShowLists(false))

    // let renderListItems = () => allStates.categoriesInfo?.map(item => <DropDownListItem key={item.name} item={item} setShowLists={setShowLists} updateCategory={updateCategory} />)
    let renderListItems = () => allStates.categoriesInfo?.map(item => <DropDownListItem key={item.name} item={item} setShowLists={setShowLists} setAllStates={setAllStates} />)

    return (
        <ul className={`tags-list ${showLists ? 'show' : 'hide'}`} aria-label='list of available tags'>
            {renderListItems()}
        </ul>
    )
}

let DropDownListItem = ({ item, setShowLists, setAllStates }) => {
    let handleClick = () => {
        setShowLists(false)
        handleUpdateStatesValue(setAllStates, 'tagCategoryName', item.name)
    }
    return (
        <li key={item.name} onClick={handleClick} aria-label='tag item'>
            <span className='tag-name'>{item.name}</span>
            <FontAwesomeIcon icon={faCaretRight} />
            <span>{item.topics}</span>
        </li>
    )
}

let NavigationBar = ({setAllStates}) => {
    // let showNavs = () => labels.map(name => <li key={name} className='nav-item'><a className='nav-link' href='http://localhost:3000/public-forum-an-attempt/category' target={'_blank'}>{name}</a></li>)

    // let showNavs = () => labels.map(name => <li key={name} className='nav-item'><Link className='nav-link' to={`${baseUri}/category`} target={'_parent'}>{name}</Link></li>)

    let showNavs = () => labels.map(name => <RenderFeaturedNavsLinks key={name} className='nav-item' name={name} setAllStates={setAllStates} />)

    return (
        <ul className='navs-view' role={'list'} aria-label='featuring tags nav items'>
            {showNavs()}
        </ul>
    )
}

let RenderFeaturedNavsLinks = ({ name, className, setAllStates }) => {
    let handleClick = () => {
        handleUpdateStatesValue(setAllStates, 'tagCategoryName', name)
    }
    return (
        <li className={className} onClick={handleClick} aria-label={`${name} tag`}>
            {/* <Link className='nav-link' to={`${baseUri}/category`} target={'_blank'}>{name}</Link> */}
            {/* <Link to={`${baseUri}/category`} tabIndex={'-1'}>{name}</Link> */}
            <Link to={`${baseUri}/category`}>{name}</Link>
        </li>
    )
}

let labels = ['Latest', 'Top', 'Leaderboard']

export default TopicTagCategoryHeader