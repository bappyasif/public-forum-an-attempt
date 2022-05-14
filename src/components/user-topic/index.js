import React from 'react'
import './styles.css'
function UserTopic() {
  return (
    <div className='user-topic'>
      <TopicHeader />
    </div>
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