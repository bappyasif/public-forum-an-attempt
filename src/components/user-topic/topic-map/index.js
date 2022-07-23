import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../../App'
import './styles.css'

function TopicMap() {

    return (
        <section className='map' aria-label='topic map'>
            <div className='topic-map'>
                <ShowRecentTopicMaps />
                <ShowTopicMapDropdown />
            </div>
        </section>
    )
}

let ShowTopicMapDropdown = () => {
    let [showDropdown, setShowDropdown] = useState(false)
    let toggleDropdown = () => setShowDropdown(!showDropdown)
    return (
        <div className='topic-map-drop-down' role={'img'} aria-label='dropdown icon'>
            {/* <FontAwesomeIcon icon={faAngleDown} width={156} onClick={toggleDropdown} /> */}
            {/* { showDropdown ? <FontAwesomeIcon icon={faAngleUp} width={156} onClick={toggleDropdown} className='arrow-up' /> : <FontAwesomeIcon icon={faAngleDown} width={156} onClick={toggleDropdown} className='arrow-down' />} */}
            {/* <FontAwesomeIcon icon={!showDropdown ? faAngleUp : faAngleDown} width={156} onClick={toggleDropdown} className={showDropdown ? 'arrow-up' : 'arrow-down'} /> */}

            <FontAwesomeIcon icon={faAngleUp} width={156} onClick={toggleDropdown} className={showDropdown ? 'arrow-up' : 'arrow-down'} />
            {/* { showDropdown ? <DropdownDrawer /> : null} */}
            <DropdownDrawer showDropdown={showDropdown} />
        </div>
    )
}

let DropdownDrawer = ({showDropdown}) => {
    return (
        <div className={`ddd-wrapper ${showDropdown ? 'active' : 'inactive'}`}>
            <img src='https://unsplash.it/47' alt='user displayed who replied' />
            <img src='https://unsplash.it/47' alt='user displayed who replied' />
        </div>
    )
}

let ShowRecentTopicMaps = () => {
    return (
        <ul aria-label='current topic map info'>
            {mapsDemo.map(item => <ShowHighlightedTopicUser key={item.title} item={item} />)}
            {mapsNumbers.map(item => <ShowTopicRelatedNumbers key={item.title} item={item} />)}
            <CurrentlyParticipatingUsers />
        </ul>
    )
}

let CurrentlyParticipatingUsers = () => {
    let populateUsers = () => participatingUsers.map(item => <PopulateUser key={item.name} item={item} />)
    return (
        <li className='users-group' aria-label='list of user replied'>
            {populateUsers()}
        </li>
    )
}

let PopulateUser = ({ item }) => {
    let { name, imgUrl } = { ...item }
    let [showTooltip, setShowTooltip] = useState(false)

    return (
        <div role={'article'} aria-label='replied user' onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
            <img src={imgUrl} alt='user depiction' />
            {showTooltip && <p>{name}</p>}
        </div>
    )
}

let ShowTopicRelatedNumbers = ({ item }) => {
    let { title, count } = { ...item }
    let allStates = useContext(UserContext);

    return (
        <li className='numbers-group' aria-label={title}>
            <span>{ ((title === 'replies' || title === 'users') && allStates['topicRepliesByUser']?.length) || count}</span>
            <p>{title}</p>
        </li>
    )
}

let ShowHighlightedTopicUser = ({ item }) => {
    let { title, user, at } = { ...item }
    let [showTooltip, setShowTooltip] = useState(false)

    return (
        <li className={title} aria-label={title} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
            <h2>{title}</h2>
            <div>
                <img src={user.imgUrl} alt='depicting user' />
                {showTooltip && <p className='tooltip'>{user.name}</p>}
                <span>{at} {Math.random() > .51 ? 'h' : 'm'}</span>
            </div>
        </li>
    )
}

let mapsDemo = [
    { title: 'created', user: { imgUrl: 'https://unsplash.it/26', name: 'user' }, at: 42 },
    { title: 'last reply', user: { imgUrl: 'https://unsplash.it/26', name: 'user' }, at: 42 },
]

let participatingUsers = [
    { name: 'User Een', imgUrl: 'https://unsplash.it/26' },
    { name: 'User Twee', imgUrl: 'https://unsplash.it/26' },
    { name: 'User Drie', imgUrl: 'https://unsplash.it/26' },
    { name: 'User vier', imgUrl: 'https://unsplash.it/26' }
]

let mapsNumbers = [
    { title: 'replies', count: 22 },
    { title: 'views', count: 22 },
    { title: 'users', count: 22 },
    { title: 'likes', count: 22 }
]

export default TopicMap