import { LinkPreview } from '@dhaiwat10/react-link-preview'
import React from 'react'
import './styles.css'
import TopicMap from './topic-map'

function UserTopic() {
  return (
    <div className='user-topic'>
      <TopicHeader />
      <TopicContent />
      <TopicMap />
    </div>
  )
}

let TopicContent = () => {
  return (
    <div className='topic-content'>
      <UserInfoAndTopicTimeStamp />
      <TopicDescription />
    </div>
  )
}

let UserInfoAndTopicTimeStamp = () => {
  return (
    <div className='starting-infos'>
      <UserInfo />
      <TimeStamp />
    </div>
  )
}

let TimeStamp = () => {
  return (
    <p className='time-stamp'>
      42 <span>{Math.random() > .51 ? 'm' : 'h'}</span>
    </p>
  )
}

let UserInfo = () => {
  return (
    <div className='user-info'>
      <img src='https://unsplash.it/60' alt='user visual' />
      <p>User Name</p>
    </div>
  )
}

let TopicDescription = () => {
  return (
    <div className='topic-description'>
      <DescriptionText />
      <ShowUserLinkPreview />
      <ShowTopicRelatedSnaps />
    </div>
  )
}

let ShowTopicRelatedSnaps = () => {
  let imgs = ['https://unsplash.it/600/400', 'https://unsplash.it/600/400']
  let showSnaps = () => imgs.map(imgUrl => <ShowSnap key={imgUrl} imgUrl={imgUrl} />)
  return (
    <div className='topic-snaps'>
      {showSnaps()}
    </div>
  )
}

let ShowSnap = ({imgUrl}) => {
  return <img src={imgUrl} alt='topic snap' />
}

let ShowUserLinkPreview = () => {
  return (
    <LinkPreview url='https://developer.mozilla.org' />
  )
}

let DescriptionText = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  )
}

let TopicHeader = () => {
  return (
    <section id='header-section'>
      <h1>user topic sentence goes here, if you know how to help with this, please, feel free to do so</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </section>
  )
}

export default UserTopic