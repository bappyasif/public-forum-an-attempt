import { faAngleDown, faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { getTimeElapsed } from '../../utility-methods'
import './styles.css'

function AllTopicsEngaggedWith() {
  let renderTopics = () => topicsDemo.map(topic => <IndividualTopic key={topic.topicTitle} item={topic} />)
  return (
    <div>
      <ul>
        {renderTopics()}
      </ul>
    </div>
  )
}

let IndividualTopic = ({ item }) => {
  let { photo, userName, topicTitle, topicTag, time, replyText, mediaAttached, mediaFile } = { ...item }

  return (
    <li className='individual-topic'>
      <TopContents photo={photo} time={time} title={topicTitle} tag={topicTag} />
      <ReplyBody replyText={replyText} />
    </li>
  )
}

let ReplyBody = ({ replyText }) => {
  return <p className='reply-body'>{replyText}</p>
}

let TopContents = ({ photo, title, tag, time }) => {
  return (
    <div className='tc-info'>
      <div className='outer'>
        <InnerMostDiv title={title} photo={photo} />
        <RightMostDiv time={time} />
      </div>
      <div className='category-tag'>{tag}</div>
    </div>
  )
}

let RightMostDiv = ({ time }) => {
  let [expand, setExpand] = useState(false)
  let handleClick = () => setExpand(!expand)
  return (
    <div className='right-most'>
      <FontAwesomeIcon icon={faAngleDown} onClick={handleClick} className={`expand ${expand ? 'now' : ''}`} />
      <span>{getTimeElapsed(time)}</span>
    </div>
  )
}

let InnerMostDiv = ({ title, photo }) => {
  return (
    <div className='inner'>
      <a><img src={photo} alt="user profile display portrait" /></a>
      <span className='topic-title'><a>{title}</a></span>
    </div>
  )
}

let topicsDemo = [
  {
    photo: "https://unsplash.it/60",
    userName: "a b",
    topicTitle: "Learn CSS Colors by Building a Set of Colored Markers - Step 4",
    topicTag: "HTML-CSS",
    time: new Date().getTime(),
    replyText: "i used your code snippet and it’s passing just fine for me [image] i would recommend, try hard refreshing your browser and try again, failing that try another browser altogther, happy learning :slight_smile:",
    mediaAttached: true,
    mediaFile: "https://unsplash.it"
  },
  {
    photo: "https://unsplash.it/60",
    userName: "a b",
    topicTitle: "Learn CSS Colors by Building a Set of Colored Markers - Step 24",
    topicTag: "HTML-CSS",
    time: new Date().getTime(),
    replyText: "i used your code snippet and it’s passing just fine for me [image] i would recommend, try hard refreshing your browser and try again, failing that try another browser altogther, happy learning :slight_smile:",
    mediaAttached: false,
    mediaFile: "https://unsplash.it"
  },
  {
    photo: "https://unsplash.it/60",
    userName: "a b",
    topicTitle: "Learn CSS Colors by Building a Set of Colored Markers - Step 44",
    topicTag: "HTML-CSS",
    time: new Date().getTime(),
    replyText: "i used your code snippet and it’s passing just fine for me [image] i would recommend, try hard refreshing your browser and try again, failing that try another browser altogther, happy learning :slight_smile:",
    mediaAttached: true,
    mediaFile: "https://unsplash.it"
  },
  {
    photo: "https://unsplash.it/60",
    userName: "a b",
    topicTitle: "Learn CSS Colors by Building a Set of Colored Markers - Step 54",
    topicTag: "HTML-CSS",
    time: new Date().getTime(),
    replyText: "i used your code snippet and it’s passing just fine for me [image] i would recommend, try hard refreshing your browser and try again, failing that try another browser altogther, happy learning :slight_smile:",
    mediaAttached: false,
    mediaFile: "https://unsplash.it"
  }
]

export default AllTopicsEngaggedWith