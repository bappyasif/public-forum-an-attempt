import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles.css'

function MostLikedTopicsDetails() {
  return (
    <div className='most-liked-details-container'>
        <RenderMostLikedBy typeName={"Most Liked By"} />
        <RenderMostLikedBy typeName={"Most Liked"} />
    </div>
  )
}

let RenderMostLikedBy = ({typeName}) => {
    let renderItems = () => demoLikes.map(item => <RenderDetail key={item.name} item={item} />)
    return (
        <div className='list-wrapper'>
            <h2>{typeName}</h2>
            <ul>
                {renderItems()}
            </ul>
        </div>
    )
}

let RenderDetail = ({item}) => {
    let {name, likesCount, profilePic} = {...item}
    return (
        <li className='list-elem'>
            <img src={profilePic} />
            <p className='item-info'>
                <span>{name}</span>
                <span><FontAwesomeIcon icon={faHeart} /> <span>{likesCount}</span></span>
            </p>
        </li>
    )
}

let demoLikes = [
    {
        name: "hoxie",
        likesCount: 4,
        profilePic: "https://www.unsplash.it/60"
    },
    {
        name: "hoxie",
        likesCount: 4,
        profilePic: "https://www.unsplash.it/60"
    },
    {
        name: "hoxie",
        likesCount: 4,
        profilePic: "https://www.unsplash.it/60"
    },
    {
        name: "hoxie",
        likesCount: 4,
        profilePic: "https://www.unsplash.it/60"
    }
]

export default MostLikedTopicsDetails