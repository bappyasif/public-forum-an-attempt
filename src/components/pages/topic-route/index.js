import React from 'react'
import { useParams } from 'react-router-dom'
import FooterContents from '../../forum-dashboard/footer-content'
import HeaderUI from '../../header-section'
import UserTopic from '../../user-topic'

function TopicPage() {
    let params = useParams()
    console.log(params, 'params!!')
    return (
        <main className='topic-page'>
            <HeaderUI />
            {params.topicId && <UserTopic />}
            <FooterContents />
        </main>
    )
}

export default TopicPage