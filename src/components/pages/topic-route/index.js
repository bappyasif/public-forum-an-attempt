import React from 'react'
import { useParams } from 'react-router-dom'
import FooterContents from '../../forum-dashboard/footer-content'
import HeaderUI from '../../header-section'
import UserReplies from '../../user-replies'
import UserTopic from '../../user-topic'

function TopicPage() {
    let params = useParams()
    console.log(params, 'params!!')
    return (
        <main className='topic-page'>
            <HeaderUI />
            {params.topicId && <UserTopic />}
            {params.topicId && Math.random() > .4 && <UserReplies />}
            <FooterContents />
        </main>
    )
}

export default TopicPage