import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLink, faEllipsis, faPencilSquare, faReply, faThumbsUp, faSurprise, faHandsClapping, faFlag} from "@fortawesome/free-solid-svg-icons"
import {faBookmark, faGrin, faHandSpock, faHeart} from "@fortawesome/free-regular-svg-icons"
import React, { useState } from 'react'
import "./styles.css"

function UserActions({showReactions, handleMouseIn, handleMouseOut}) {
    let [optionsVisible, setOptionsVisible] = useState(false)
    let handleOptionsVisible = () => setOptionsVisible(true)
    let handleOptionsHidden = () => setOptionsVisible(false)

  return (
    <div className='user-actions'>
        <FontAwesomeIcon id='fa-heart' icon={faHeart} onMouseEnter={handleMouseIn} style={{position: "relative"}} />
        {<ShowReactions handleShowReactions={handleMouseOut} showReactions={showReactions} />}

        <FontAwesomeIcon icon={faLink} />
        {optionsVisible ? <ShowOptions handleOptionsHidden={handleOptionsHidden} /> : <FontAwesomeIcon icon={faEllipsis} onClick={handleOptionsVisible} style={{position: "relative"}} />}

        <FontAwesomeIcon icon={faReply} />
    </div>
  )
}

let ShowOptions = ({handleOptionsHidden}) => {
    let handleClick = () => handleOptionsHidden() 
    return (
        <div className='show-options'>
            <FontAwesomeIcon icon={faFlag} onClick={handleClick} />
            <FontAwesomeIcon icon={faBookmark} onClick={handleClick} />
        </div>
    )
}

let ShowReactions = ({handleShowReactions, showReactions}) => {
    let handleClick = () => handleShowReactions()

    return (
        <div id='reactions' className={`${showReactions ? 'reactions-picker' : 'fold-down'}`} onMouseLeave={handleShowReactions}>
            <FontAwesomeIcon icon={faHeart} onClick={handleClick} />
            <FontAwesomeIcon icon={faThumbsUp} onClick={handleClick} />
            <FontAwesomeIcon icon={faGrin} onClick={handleClick} />
            <FontAwesomeIcon icon={faSurprise} onClick={handleClick} />
            <FontAwesomeIcon icon={faHandsClapping} onClick={handleClick} />
            <FontAwesomeIcon icon={faHandSpock} onClick={handleClick} />
        </div>
    )
}

export default UserActions