import React, { useContext, useState } from 'react'
import { UserContext } from '../../App';
import { fakeReplies } from '../components-container'
import UserActions from '../user-actions';
import "./styles.css";

function UserReplies({setAllStates}) {
  let allStates = useContext(UserContext);
  // let renderReplies = () => fakeReplies?.map(item => <RenderReply key={item.id} item={item} id={item.id} setAllStates={setAllStates} />)
  // let renderReplies = () => allStates['topicRepliesByUser'].length ? allStates['topicRepliesByUser'].map(item => <RenderReply key={item.id} item={item} id={item.id} setAllStates={setAllStates} /> :  fakeReplies.map(item => <RenderReply key={item.id} item={item} id={item.id} setAllStates={setAllStates} />)
  let renderReplies = () => {
    if(allStates['topicRepliesByUser']?.length) {
      return allStates['topicRepliesByUser']?.map(item => <RenderReply key={item.id} item={item} id={item.id} setAllStates={setAllStates} />)
    } else {
      return fakeReplies?.map(item => <RenderReply key={item.id} item={item} id={item.id} setAllStates={setAllStates} />)
    }
  }

  return (
    <section className='render-replies' aria-label='render replies'>
      {renderReplies()}
    </section>
  )
}

let RenderReply = ({ item , id, setAllStates }) => {
  let { name, picUrl, replyText, postedTime } = { ...item }
  
  let [showReactions, setShowReactions] = useState(false)
  
  let handleMouseMovedIn = () => setShowReactions(true)
  
  let handleMouseMovedOut = () => setShowReactions(false)
  
  return (
    <div className='reply-wrapper' onMouseLeave={handleMouseMovedOut}>
      <RenderReplyTopPart name={name} picUrl={picUrl} postedTime={postedTime} />
      <RenderReplyTextContent replyText={replyText} />
      <UserActions showReactions={showReactions} handleMouseIn={handleMouseMovedIn} handleMouseOut={handleMouseMovedOut} fromReplies={true} id={id} setAllStates={setAllStates} />
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
    <section className='rr-top-part'  aria-label={'topic reply info container posted on '+postedTime}>
      <p className='user-info' aria-label='user info' role={'article'}>
        <img src={picUrl} alt="user depiction" />
        <span aria-label={'user name'} role={'note'}>{name}</span>
      </p>
      <span aria-label='posted time' role={'note'}>{postedTime}</span>
    </section>
  )
}

export default UserReplies