import React, { useState } from 'react'
import { fakeReplies } from '../components-container'
import UserActions from '../user-actions';
import "./styles.css";

function UserReplies() {
  let renderReplies = () => fakeReplies?.map(item => <RenderReply key={item.id} item={item} />)
  return (
    <div className='render-replies'>
      {renderReplies()}
    </div>
  )
}

let RenderReply = ({ item }) => {
  let { name, picUrl, replyText, postedTime } = { ...item }
  
  let [showReactions, setShowReactions] = useState(false)
  
  let handleMouseMovedIn = () => setShowReactions(true)
  
  let handleMouseMovedOut = () => setShowReactions(false)
  
  return (
    <div className='reply-wrapper' onMouseLeave={handleMouseMovedOut}>
      <RenderReplyTopPart name={name} picUrl={picUrl} postedTime={postedTime} />
      <RenderReplyTextContent replyText={replyText} />
      <UserActions showReactions={showReactions} handleMouseIn={handleMouseMovedIn} handleMouseOut={handleMouseMovedOut} />
    </div>
  )
}

let RenderReplyTextContent = ({ replyText }) => {
  return (
    <p className='text-content'>{replyText}</p>
  )
}

let RenderReplyTopPart = ({ name, picUrl, postedTime }) => {
  return (
    <div className='rr-top-part'>
      <p className='user-info'>
        <img src={picUrl} alt="user depiction" />
        <span>{name}</span>
      </p>
      <span>{postedTime}</span>
    </div>
  )
}

export default UserReplies