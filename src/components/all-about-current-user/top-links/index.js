import { faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles.css'

function TopLinksAndMostRepliedTo() {
    return (
        <div className='top-links-most-replied'>
            <TopLinks sourceArray={demoLinks} />
            <MostRepliedTo sourceArray={demoRepliedTo} />
        </div>
    )
}

let MostRepliedTo = ({sourceArray}) => {
    let renderMostRepliedElments = () => sourceArray?.map((item, _) => <RenderRepliedTo key={_} item={item} />)

    return (
        <div className='most-replied-to'>
            <h2>MOST REPLIED TO</h2>
            <ul>
                {renderMostRepliedElments()}
            </ul>
        </div>
    )
}

let RenderRepliedTo = ({item}) => {
    let {avatar, name, howManyTimes, userID} = {...item}
    return (
        <li className='render-most-replied-to'>
            <div className='user-image'>
                <img alt={name} src={avatar} />
            </div>

            <div className='user-details'>
                <div className='name-line'>
                    <span className='user-id'>{userID}</span>
                    <span className='user-name'>{name}</span>
                    <br />
                    <span className='decorative'></span>
                    <div className='details'>
                        <FontAwesomeIcon icon={faReply} />
                        <span className='how-many-times'>{howManyTimes}</span>
                    </div>
                </div>
            </div>
        </li>
    )
}

let TopLinks = ({ sourceArray }) => {
    let renderLinks = () => sourceArray?.map((item, _) => <RenderLink key={_} item={item} />)
    return (
        <div className='top-links'>
            <h2>TOP LINKS</h2>
            <ul>
                {renderLinks()}
            </ul>
        </div>
    )
}

let RenderLink = ({ item }) => {
    let {link, count, topicTitle} = {...item}

    return (
        <li>
            <a className='link-add' href={link}>{link}</a>
            <span className='click-count'>{count}</span>
            <br />
            <a  className='topic-title' href={'#'}>{topicTitle}</a>
        </li>
    )
}

let demoRepliedTo = [
    { avatar: 'https://unsplash.it/60', name: 'hoxieloxie', howManyTimes: 9, userID: 'aa@bb.cc' },
    { avatar: 'https://unsplash.it/60', name: 'hoxieloxie', howManyTimes: 9, userID: 'aa@bb.cc' },
    { avatar: 'https://unsplash.it/60', name: 'hoxieloxie', howManyTimes: 9, userID: 'aa@bb.cc' },
    { avatar: 'https://unsplash.it/60', name: 'hoxieloxie', howManyTimes: 9, userID: 'aa@bb.cc' },
    { avatar: 'https://unsplash.it/60', name: 'hoxieloxie', howManyTimes: 9, userID: 'aa@bb.cc' },
    { avatar: 'https://unsplash.it/60', name: 'hoxieloxie', howManyTimes: 9, userID: 'aa@bb.cc' }
]

let demoLinks = [
    { link: "https://www.developer.mozilla.org/en-US/docs/web/css/gradient/repeating-linear-gradient", count: 42, topicTitle: "Is there an element that is like a checkbox, but has three states?" },
    { link: "https://www.developer.mozilla.org/en-US/docs/web/css/gradient/repeating-linear-gradient", count: 42, topicTitle: "Is there an element that is like a checkbox, but has three states?" },
    { link: "https://www.developer.mozilla.org/en-US/docs/web/css/gradient/repeating-linear-gradient", count: 42, topicTitle: "Is there an element that is like a checkbox, but has three states?" },
    { link: "https://www.developer.mozilla.org/en-US/docs/web/css/gradient/repeating-linear-gradient", count: 42, topicTitle: "Is there an element that is like a checkbox, but has three states?" },
    { link: "https://www.developer.mozilla.org/en-US/docs/web/css/gradient/repeating-linear-gradient", count: 42, topicTitle: "Is there an element that is like a checkbox, but has three states?" },
    { link: "https://www.developer.mozilla.org/en-US/docs/web/css/gradient/repeating-linear-gradient", count: 42, topicTitle: "Is there an element that is like a checkbox, but has three states?" }
]

export default TopLinksAndMostRepliedTo