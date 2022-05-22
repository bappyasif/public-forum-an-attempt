import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { baseUri } from '../../../App'
import { UserContext } from '../../components-container'
import "./styles.css"

export function LatestUserInteractionsContainer() {
    return (
        <section className='latest-user-interactions-container'>
            <InteractionHeader />
            <LatestTopicsFromUsers />
        </section>
    )
}

let LatestTopicsFromUsers = () => {
    let [latestTopics, setLatestTopics] = useState(null)
    let allStates = useContext(UserContext);

    useEffect(() => {
        setLatestTopics(allStates?.fakeTopics)
    }, [allStates?.fakeTopics])

    let renderTopics = () => latestTopics && latestTopics.map(item => <TopicUI key={item.text} topicContent={item} />)

    console.log(latestTopics, 'Latest')

    return (
        <ul className='latest-topics'>
            {renderTopics()}
        </ul>
    )
}

let TopicUI = ({ topicContent }) => {
    return (
        // <Link to={`${baseUri}/topic/topicContent.text`}>
        <li className='topic-ui' aria-label={topicContent.text}>
            {/* <a href='http://localhost:3000/'> */}
            <img className='profile-pic' src='https://picsum.photos/200' alt='user profile circular view' />
            {/* <Link to={`${baseUri}/topic/topicContent.text`}> */}
            <div className='mid-section'>
                {/* <nav> */}
                    <Link to={`${baseUri}/topic/${topicContent.id}`}>
                        <div className='topic-text'>{topicContent.text}</div>
                    </Link>
                    {/* <Outlet /> */}
                {/* </nav> */}
                <Outlet />
                <div className='topic-tag'>{topicContent.tag}</div>
            </div>
            {/* </Link> */}
            <div className='posted-info'>
                <div className='posted-date'>{topicContent.datePosted}</div>
                <div className='live-since'>{topicContent.liveDuration}</div>
            </div>
            {/* </a> */}
        </li>
        // </Link>
    )
}

let InteractionHeader = () => {
    return <h2 className='interactions-header'>Latest</h2>
}