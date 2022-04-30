import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../components-container'
import "./styles.css"

export function LatestUserInteractionsContainer() {
  return (
    <div className='latest-user-interactions-container'>
        <InteractionHeader />
        <LatestTopicsFromUsers />
    </div>
  )
}

let LatestTopicsFromUsers = () => {
    let [latestTopics, setLatestTopics] = useState(null)
    let allStates = useContext(UserContext);

    useEffect(() => {
        setLatestTopics(allStates.fakeTopics)
    }, [allStates.fakeTopics])

    let renderTopics = () => latestTopics && latestTopics.map(item => <TopicUI key={item.text} topicContent={item} />)

    console.log(latestTopics, 'Latest')

    return (
        <div className='latest-topics'>
            {renderTopics()}
        </div>
    )
}

let TopicUI = ({topicContent}) => {
    return (
        <div className='topic-ui'>
            <img className='profile-pic' src='https://picsum.photos/200' alt='profile picture' />
            <div className='mid-section'>
                <div className='topic-text'>{topicContent.text}</div>
                <div className='topic-tag'>{topicContent.tag}</div>
            </div>
            <div className='posted-info'>
                <div className='posted-date'>{topicContent.datePosted}</div>
                <div className='live-since'>{topicContent.liveDuration}</div>
            </div>
        </div>
    )
}

let InteractionHeader = () => {
    return <div className='interactions-header'>Latest</div>
}