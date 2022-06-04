import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeartbeat, faLink, faEllipsis, faReply, faThumbsUp, faSurprise, faHandsClapping, faFlag} from "@fortawesome/free-solid-svg-icons"
import {faBookmark, faGrin, faHandSpock, faHeart} from "@fortawesome/free-regular-svg-icons"
import React, { useEffect, useState } from 'react'
import "./styles.css"

function UserActions({showReactions, handleMouseIn, handleMouseOut}) {
    let [heartCount, setHeartCount] = useState(0);
    let [whichIcon, setWhichIcon] = useState(null);

    let [reactionName, setReactionName] = useState(null)
    let handleReactionName = value => setReactionName(value);
    console.log(reactionName, 'reactionName');

    let [optionsVisible, setOptionsVisible] = useState(false)
    let handleOptionsVisible = () => setOptionsVisible(true)
    let handleOptionsHidden = () => setOptionsVisible(false)

    useEffect(() => {
        if(reactionName == 'heart') {
            setHeartCount(prevCount => prevCount + 1)
        }
        
        showIcon();
    }, [reactionName])

    let showIcon = () => {
       if (reactionName === 'heart') {
            setWhichIcon(faHeart)
        } else if(reactionName === 'thumbsUp') {
            setWhichIcon(faThumbsUp)
        } else if(reactionName === 'grin') {
            setWhichIcon(faGrin)
        } else if(reactionName === 'surprise') {
            setWhichIcon(faSurprise)
        } else if(reactionName === 'clap') {
            setWhichIcon(faHandsClapping)
        } else if(reactionName === 'spock') {
            setWhichIcon(faHandSpock)
        }
    }

  return (
    <div className='user-actions'>
        {heartCount > 0 && reactionName === 'heart' && <span style={{marginRight: '-13px'}}>{heartCount}</span>}

        {/* <FontAwesomeIcon id='fa-heart' icon={showReactions ? faHeartbeat : faHeart } onMouseEnter={handleMouseIn} style={{position: "relative", color: reactionName ? 'var(--primary-clr)' : 'none' }} /> */}
        {/* <FontAwesomeIcon id='fa-heart' icon={ whichIcon ? whichIcon : faHeart } onMouseEnter={handleMouseIn} style={{position: "relative", color: reactionName ? 'var(--primary-clr)' : 'none' }} /> */}
        <FontAwesomeIcon id='fa-heart' icon={ showReactions ? faHeartbeat : whichIcon ? whichIcon : faHeart } onMouseEnter={handleMouseIn} style={{position: "relative", color: reactionName ? 'var(--primary-clr)' : 'none' }} />
        {<ShowReactions handleShowReactions={handleMouseOut} showReactions={showReactions} handleReactionName={handleReactionName} />}

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

let ShowReactions = ({handleShowReactions, showReactions, handleReactionName}) => {
    let handleClick = (evt) => {
        // console.log(evt.target, '!!', evt.target.getAttribute("name"))
        handleReactionName(evt.target.getAttribute("name") || evt.target.parentNode.getAttribute("name"))
        handleShowReactions()
    }

    return (
        <div id='reactions' className={`${showReactions ? 'reactions-picker' : 'fold-down'}`} onMouseLeave={handleShowReactions}>
            <FontAwesomeIcon icon={faHeart} onClick={handleClick} name='heart' />
            <FontAwesomeIcon icon={faThumbsUp} onClick={handleClick} name='thumbsUp' />
            <FontAwesomeIcon icon={faGrin} onClick={handleClick} name='grin' />
            <FontAwesomeIcon icon={faSurprise} onClick={handleClick} name='surprise' />
            <FontAwesomeIcon icon={faHandsClapping} onClick={handleClick} name='clap' />
            <FontAwesomeIcon icon={faHandSpock} onClick={handleClick} name='spock' />
        </div>
    )
}

export default UserActions