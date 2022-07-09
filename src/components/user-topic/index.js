// import { LinkPreview } from '@dhaiwat10/react-link-preview'
import ReactMarkdown from 'react-markdown'
import React, { useContext } from 'react'
import './styles.css'
import TopicMap from './topic-map'
import remarkGfm from 'remark-gfm'
import { baseUri, handleUpdateStatesValue, UserContext } from '../../App'
import { Link } from 'react-router-dom'
import { RenderListItem } from '../general-purpose-use-hof'

function UserTopic({setAllStates}) {
  return (
    <section className='user-topic' aria-label='user topic'>
      <TopicHeader setAllStates={setAllStates} />
      <TopicContent />
      <TopicMap />
    </section>
  )
}

let TopicContent = () => {
  return (
    <section className='topic-content' aria-label='topic content'>
      <UserInfoAndTopicTimeStamp />
      <TopicDescription />
    </section>
  )
}

let UserInfoAndTopicTimeStamp = () => {
  return (
    <p className='starting-infos' aria-label='user topic posted info'>
      <UserInfo />
      <TimeStamp />
    </p>
  )
}

let TimeStamp = () => {
  return (
    <span className='time-stamp' aria-label='time stamp' role={'timer'}>
      42 <span>{Math.random() > .51 ? 'm' : 'h'}</span>
    </span>
  )
}

let UserInfo = () => {
  return (
    <p className='user-info' aria-label='user info'>
      <img src='https://unsplash.it/60' alt='user visual' tabIndex={'0'} />
      <span aria-label='user name' tabIndex={'0'} role={''}>User Name</span>
    </p>
  )
}

let TopicDescription = () => {
  // let regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

  let allStates = useContext(UserContext)

  // let tokens = allStates.markdownIt.split('\n')

  // console.log(tokens, 'tokens!!')
  console.log(allStates?.markdownIt, 'allStates?.markdownIt', allStates)
  return (
    <p className='topic-description' aria-label='user topic decription container' role={'article'}>
      <ReactMarkdown children={allStates?.markdownIt} remarkPlugins={remarkGfm} />
      <DescriptionText />
      {/* <DescriptionText />
      <ShowUserLinkPreview />
      <ShowTopicRelatedSnaps /> */}
    </p>
  )
}

// let ShowTopicRelatedSnaps = () => {
//   let imgs = ['https://unsplash.it/600/400', 'https://unsplash.it/600/400']
//   let showSnaps = () => imgs.map(imgUrl => <ShowSnap key={imgUrl} imgUrl={imgUrl} />)
//   return (
//     <div className='topic-snaps'>
//       {showSnaps()}
//     </div>
//   )
// }

// let ShowSnap = ({imgUrl}) => {
//   return <img src={imgUrl} alt='topic snap' />
// }

// let ShowUserLinkPreview = () => {
//   return (
//     <LinkPreview url='https://developer.mozilla.org' />
//   )
// }

let DescriptionText = () => {
  return (
    <p aria-label='user topic description text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  )
}

let TopicHeader = ({ setAllStates }) => {

  return (
    <section id='header-section' aria-label='topic header' tabIndex={'0'}>
      <h1>user topic sentence goes here, if you know how to help with this, please, feel free to do so</h1>
      <ul aria-label='topic category'>
        {/* {['HTML', 'CSS'].map(name => <RenderTagName key={name} name={name} setAllStates={setAllStates} />)} */}
        {['HTML', 'CSS'].map(name => <RenderListItem key={name} name={name} setAllStates={setAllStates} />)}
      </ul>
      {/* <ul aria-label='topic category'>
        <li tabIndex={'0'}>HTML</li>
        <li tabIndex={'0'}>CSS</li>
      </ul> */}
    </section>
  )
}

// let RenderTagName = ({setAllStates, name}) => {
//   let handleClick = () => {
//     handleUpdateStatesValue(setAllStates, 'tagCategoryName', name)
//   }
//   return (
//     <li onClick={handleClick}><Link to={`${baseUri}/category`}>{name}</Link></li>
//   )
// }

export default UserTopic