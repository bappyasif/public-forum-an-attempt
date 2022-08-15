import { faAngleDown, faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getTimeElapsed } from '../../utility-methods'
import './styles.css'

function AllTopicsEngaggedWith() {
  let [updatedTime, setUpdatedTime] = useState(null)
  
  let renderTopics = () => topicsDemo.map(topic => <IndividualTopic key={topic.topicTitle} item={topic} />)
  
  setInterval(() => setUpdatedTime(renderTopics()), 60000)

  return (
    <div>
      <ul>
        { updatedTime || renderTopics()}
      </ul>
    </div>
  )
}

let IndividualTopic = ({ item }) => {
  let { photo, userName, topicTitle, topicTag, time, replyText, mediaAttached, mediaFile } = { ...item }
  let [showMedia, setShowMedia] = useState(false)
  let handleShowMedia = () => setShowMedia(!showMedia)

  return (
    <li className='individual-topic'>
      <TopContents userName={userName} photo={photo} time={time} title={topicTitle} tag={topicTag} handleShowMedia={handleShowMedia} mediaAttached={mediaAttached} />
      <ReplyBody replyText={replyText} />
      {
        showMedia && mediaAttached
        &&
        <img className='attached-media' src={mediaFile} />
      }
    </li>
  )
}

let ReplyBody = ({ replyText }) => {
  return <p className='reply-body'>{replyText}</p>
}

let TopContents = ({ photo, title, tag, time, userName, handleShowMedia, mediaAttached }) => {

  return (
    <div className='tc-info'>
      <div className='outer'>
        <InnerMostDiv title={title} photo={photo} userName={userName} />
        <RightMostDiv time={time} handleShowMedia={handleShowMedia} mediaAttached={mediaAttached} />
      </div>
      <div className='category-tag'>{tag}</div>
    </div>
  )
}

let RightMostDiv = ({ time, handleShowMedia, mediaAttached }) => {
  let [expand, setExpand] = useState(false)
  
  let [showTooltip, setShowTooltip] = useState(false)

  let handleToggleShowTooltip = () => setShowTooltip(!showTooltip)

  let handleClick = () => {
    setExpand(!expand)
    handleShowMedia();
  }

  return (
    <div className='right-most'>
      { mediaAttached ? <FontAwesomeIcon icon={faAngleDown} onMouseEnter={handleToggleShowTooltip} onMouseLeave={handleToggleShowTooltip} onClick={handleClick} className={`expand ${expand ? 'now' : ''}`} /> : ''}
      <span className='time-elapsed'>{ getTimeElapsed(time)}</span>
      {showTooltip ? <p className='sc-tooltip'>Show/Collapse</p> : ''}
      {!showTooltip && <p className='dt-tooltip'>{new Date(time).toLocaleString().split(',')[0]}</p>}
    </div>
  )
}

let InnerMostDiv = ({ title, photo, userName }) => {
  let [showTooltip, setShowTooltip] = useState(false)
  let handleShowTooltip = () => setShowTooltip(true)
  let handleCloseShowTooltip = () => setShowTooltip(false)

  return (
    <div className='inner'>
      <a onMouseEnter={handleShowTooltip} onMouseLeave={handleCloseShowTooltip}><img src={photo} alt="user profile display portrait" /></a>
      <span className='topic-title'><a>{title}</a></span>
      <p className='name-tooltip' style={{display: showTooltip ? "block" : "none"}}>{userName}</p>
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
    mediaFile: "https://unsplash.it/260"
  },
  {
    photo: "https://unsplash.it/60",
    userName: "a b",
    topicTitle: "Learn CSS Colors by Building a Set of Colored Markers - Step 24",
    topicTag: "HTML-CSS",
    time: new Date().getTime(),
    replyText: "i used your code snippet and it’s passing just fine for me [image] i would recommend, try hard refreshing your browser and try again, failing that try another browser altogther, happy learning :slight_smile:",
    mediaAttached: false,
    mediaFile: "https://unsplash.it/260"
  },
  {
    photo: "https://unsplash.it/60",
    userName: "a b",
    topicTitle: "Learn CSS Colors by Building a Set of Colored Markers - Step 44",
    topicTag: "HTML-CSS",
    time: new Date().getTime(),
    replyText: "i used your code snippet and it’s passing just fine for me [image] i would recommend, try hard refreshing your browser and try again, failing that try another browser altogther, happy learning :slight_smile:",
    mediaAttached: true,
    mediaFile: "https://unsplash.it/260"
  },
  {
    photo: "https://unsplash.it/60",
    userName: "a b",
    topicTitle: "Learn CSS Colors by Building a Set of Colored Markers - Step 54",
    topicTag: "HTML-CSS",
    time: new Date().getTime(),
    replyText: "i used your code snippet and it’s passing just fine for me [image] i would recommend, try hard refreshing your browser and try again, failing that try another browser altogther, happy learning :slight_smile:",
    mediaAttached: false,
    mediaFile: "https://unsplash.it/260"
  }
]

export default AllTopicsEngaggedWith