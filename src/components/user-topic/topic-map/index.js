import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './styles.css'

function TopicMap() {

    return (
        <div className='map'>
            <section className='topic-map'>
                <ShowRecentTopicMaps />
                <ShowTopicMapDropdown />
            </section>
        </div>
    )
}

let ShowTopicMapDropdown = () => {
    return (
        <div className='topic-map-drop-down'>
            <FontAwesomeIcon icon={faAngleDown} width={156} />
        </div>
    )
}

let ShowRecentTopicMaps = () => {
    return (
        <ul>
            {mapsDemo.map(item => <ShowHighlightedTopicUser key={item.title} item={item} />)}
            {mapsNumbers.map(item => <ShowTopicRelatedNumbers key={item.title} item={item} />)}
            <CurrentlyParticipatingUsers />
        </ul>
    )
}

let CurrentlyParticipatingUsers = () => {
    let populateUsers = () => participatingUsers.map(item => <PopulateUser key={item.name} item={item} />)
    return (
        <li className='users-group'>
            {populateUsers()}
        </li>
    )
}

let PopulateUser = ({ item }) => {
    let { name, imgUrl } = { ...item }
    let [showTooltip, setShowTooltip] = useState(false)

    return (
        <div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
            <img src={imgUrl} alt='user depiction' />
            {showTooltip && <p>{name}</p>}
        </div>
    )
}

let ShowTopicRelatedNumbers = ({ item }) => {
    let { title, count } = { ...item }
    return (
        <li className='numbers-group'>
            <span>{count}</span>
            <p>{title}</p>
        </li>
    )
}

let ShowHighlightedTopicUser = ({ item }) => {
    let { title, user, at } = { ...item }
    let [showTooltip, setShowTooltip] = useState(false)

    return (
        <li className={title} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
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