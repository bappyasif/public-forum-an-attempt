import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterContents from '../../forum-dashboard/footer-content'
import HeaderUI from '../../header-section'
import UserActions from '../../user-actions'
import UserReplies from '../../user-replies'
import UserTopic from '../../user-topic'
import "./styles.css"

function TopicPage({setAllStates}) {
    let params = useParams()

    let [showReactions, setShowReactions] = useState(false)

    let handleMouseMovedIn = () => setShowReactions(true)

    let handleMouseMovedOut = () => setShowReactions(false)

    // console.log(params, 'params!!', showReactions)
    return (
        <div className='topic-page'>
            <HeaderUI setAllStates={setAllStates} />
            <main style={{width: '850px', margin: '0 auto'}} aria-label='user topic and replies'>
                {params.topicId && <UserTopic setAllStates={setAllStates} />}
                {params.topicId && <UserActions showReactions={showReactions} handleMouseIn={handleMouseMovedIn} handleMouseOut={handleMouseMovedOut} setAllStates={setAllStates} />}
                <div onMouseEnter={handleMouseMovedOut}>{params.topicId && <UserReplies setAllStates={setAllStates} />}</div>
            </main>
            <FooterContents />
        </div>
    )
}

export default TopicPage