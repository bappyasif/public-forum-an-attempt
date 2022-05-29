import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterContents from '../../forum-dashboard/footer-content'
import HeaderUI from '../../header-section'
import UserActions from '../../user-actions'
import UserReplies from '../../user-replies'
import UserTopic from '../../user-topic'

function TopicPage() {
    let params = useParams()
    
    let [showReactions, setShowReactions] = useState(false)

    let handleMouseMovedIn = () => setShowReactions(true)

    let handleMouseMovedOut = () => setShowReactions(false)

    // console.log(params, 'params!!', showReactions)
    return (
        <main className='topic-page'>
            <HeaderUI />
            {params.topicId && <UserTopic />}
            {/* {params.topicId && <UserActions showReactions={showReactions} handleMouseIn={handleMouseMovedIn} handleMouseOut={handleMouseMovedOut} originalUserPost={true} />} */}
            {/* <div>{params.topicId && <UserActions showReactions={showReactions} handleMouseIn={handleMouseMovedIn} handleMouseOut={handleMouseMovedOut} />}</div> */}
            {params.topicId && <UserActions showReactions={showReactions} handleMouseIn={handleMouseMovedIn} handleMouseOut={handleMouseMovedOut} />}
            <div onMouseEnter={handleMouseMovedOut}>{params.topicId && <UserReplies />}</div>
            {/* {params.topicId && <UserReplies />} */}
            {/* {params.topicId && <UserReplies showReactions={showReactions} handleMouseIn={handleMouseMovedIn} handleMouseOut={handleMouseMovedOut} />} */}
            <FooterContents />
        </main>
    )
}

export default TopicPage