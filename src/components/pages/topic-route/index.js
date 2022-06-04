import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterContents from '../../forum-dashboard/footer-content'
import HeaderUI from '../../header-section'
import UserActions from '../../user-actions'
import UserReplies from '../../user-replies'
import UserTopic from '../../user-topic'
import "./styles.css"

function TopicPage() {
    let params = useParams()

    let [showReactions, setShowReactions] = useState(false)

    let handleMouseMovedIn = () => setShowReactions(true)

    let handleMouseMovedOut = () => setShowReactions(false)

    // console.log(params, 'params!!', showReactions)
    return (
        <main className='topic-page'>
            <HeaderUI />
            <div style={{width: '850px', margin: '0 auto'}}>
                {params.topicId && <UserTopic />}
                {params.topicId && <UserActions showReactions={showReactions} handleMouseIn={handleMouseMovedIn} handleMouseOut={handleMouseMovedOut} />}
                <div onMouseEnter={handleMouseMovedOut}>{params.topicId && <UserReplies />}</div>
            </div>
            <FooterContents />
        </main>
    )
}

export default TopicPage