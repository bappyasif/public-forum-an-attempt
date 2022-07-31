import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles.css'

function RepliesAndTopicsSections() {
  return (
    <div className='replies-and-topics-section'>
      <TopRepliesAndTopics className='top-replies' sourceArray={demoData} />
      <TopRepliesAndTopics className='top-topics' sourceArray={demoData} />
    </div>
  )
}

let TopRepliesAndTopics = ({ className, sourceArray }) => {
  let renderRepliesOrTopics = () => sourceArray?.map(item => <RenderElements key={item.id} item={item} />)
  return (
    <div className={`sections ${className}`}>
      <h2>{className.toUpperCase()}</h2>
      <ul>
        {renderRepliesOrTopics()}
      </ul>
    </div>
  )
}

let RenderElements = ({ item }) => {
  let {date, liked, topicTitle} = {...item}
  return (
    <li className='element-view'>
      <span className='topic-info'>
        <span className='rel-date'>{date}</span>
        .
        <FontAwesomeIcon icon={faHeart} />
        <span className='like-count'>{liked}</span>
      </span>
      <br />
      <a href='#'>{topicTitle}</a>
    </li>
  )
}

let demoData = [
  { id: 1, date: 'May 02', liked: 4, topicTitle: "If Conditionals in an Object Iteration doesn’t passing through After First TRUE Case!" },
  { id: 2, date: 'May 02', liked: 4, topicTitle: "If Conditionals in an Object Iteration doesn’t passing through After First TRUE Case!" },
  { id: 3, date: 'May 02', liked: 4, topicTitle: "If Conditionals in an Object Iteration doesn’t passing through After First TRUE Case!" },
  { id: 4, date: 'May 02', liked: 4, topicTitle: "If Conditionals in an Object Iteration doesn’t passing through After First TRUE Case!" }
]

export default RepliesAndTopicsSections