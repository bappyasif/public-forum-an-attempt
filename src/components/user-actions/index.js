import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faLink, faEllipsis, faReply, faThumbsUp, faSurprise, faHandsClapping, faFlag } from "@fortawesome/free-solid-svg-icons"
import { faBookmark, faGrin, faHandSpock, faHeart } from "@fortawesome/free-regular-svg-icons"
import React, { useEffect, useState } from 'react'
import "./styles.css"

function UserActions({ showReactions, handleMouseIn, handleMouseOut, fromReplies }) {
    let [heartCount, setHeartCount] = useState(0);
    let [whichIcon, setWhichIcon] = useState(null);
    let [rndNum, setRndNum] = useState(null)

    let [reactionName, setReactionName] = useState(null)
    let handleReactionName = value => setReactionName(value);
    // console.log(reactionName, 'reactionName');

    let [optionsVisible, setOptionsVisible] = useState(false)
    let handleOptionsVisible = () => setOptionsVisible(true)
    let handleOptionsHidden = () => setOptionsVisible(false)

    useEffect(() => {
        let rnd = Math.random()
        setRndNum(rnd)
    }, [])

    useEffect(() => {
        if (reactionName === 'heart') {
            setHeartCount(prevCount => prevCount + 1)
        }

        showIcon();
        // showIconOrToltip(setWhichIcon, reactionName);
    }, [reactionName])

    let showIcon = () => {
        if (reactionName === 'heart') {
            setWhichIcon(faHeart)
        } else if (reactionName === 'thumbsUp') {
            setWhichIcon(faThumbsUp)
        } else if (reactionName === 'grin') {
            setWhichIcon(faGrin)
        } else if (reactionName === 'surprise') {
            setWhichIcon(faSurprise)
        } else if (reactionName === 'clap') {
            setWhichIcon(faHandsClapping)
        } else if (reactionName === 'spock') {
            setWhichIcon(faHandSpock)
        }
    }

    // let handleHover

    return (
        <div className='user-actions'>
            { <FontAwesomeIcon id='topic-user-reply-reaction' icon={ whichIcon && whichIcon } style={{visibility: fromReplies && rndNum > .2 ? 'visible' : 'hidden'}} />}
            <div>
                {heartCount > 0 && reactionName === 'heart' && <span style={{ marginRight: '-13px' }}>{heartCount}</span>}

                <FontAwesomeIcon id='fa-heart' icon={showReactions ? faHeartbeat : whichIcon ? whichIcon : faHeart} onMouseEnter={handleMouseIn} style={{ position: "relative", color: reactionName ? 'var(--primary-clr)' : 'none' }} />
                {/* <FontAwesomeIcon id='fa-heart' icon={(showReactions && !whichIcon) ? faHeartbeat : (showReactions && whichIcon)  ? whichIcon : faHeart} onMouseEnter={handleMouseIn} style={{ position: "relative", color: reactionName ? 'var(--primary-clr)' : 'none' }} /> */}
                {/* <FontAwesomeIcon id='fa-heart' icon={faHeart} onMouseEnter={handleMouseIn} style={{ position: "relative", color: reactionName ? 'var(--primary-clr)' : 'none' }} /> */}
                {<ShowReactions handleShowReactions={handleMouseOut} showReactions={showReactions} handleReactionName={handleReactionName} />}

                <FontAwesomeIcon icon={faLink} />
                {optionsVisible ? <ShowOptions handleOptionsHidden={handleOptionsHidden} /> : <FontAwesomeIcon icon={faEllipsis} onClick={handleOptionsVisible} style={{ position: "relative" }} />}

                <div id='reply-div'>
                    <FontAwesomeIcon icon={faReply} id='reply-icon' />
                    <span>Reply</span>
                </div>
            </div>
        </div>
    )
}

let ShowOptions = ({ handleOptionsHidden }) => {
    let handleClick = () => handleOptionsHidden()
    return (
        <div className='show-options'>
            <FontAwesomeIcon icon={faFlag} onClick={handleClick} />
            <FontAwesomeIcon icon={faBookmark} onClick={handleClick} />
        </div>
    )
}

let ShowReactions = ({ handleShowReactions, showReactions, handleReactionName }) => {
    let handleClick = (evt) => {
        handleReactionName(evt.target.getAttribute("name") || evt.target.parentNode.getAttribute("name"))
        handleShowReactions()
    }

    return (
        <div id='reactions' className={`${showReactions ? 'reactions-picker' : 'fold-down'}`} onMouseLeave={handleShowReactions}>
            {/* <FontAwesomeIcon icon={faHeart} onClick={handleClick} name='heart' />
            <FontAwesomeIcon icon={faThumbsUp} onClick={handleClick} name='thumbsUp' />
            <FontAwesomeIcon icon={faGrin} onClick={handleClick} name='grin' />
            <FontAwesomeIcon icon={faSurprise} onClick={handleClick} name='surprise' />
            <FontAwesomeIcon icon={faHandsClapping} onClick={handleClick} name='clap' />
            <FontAwesomeIcon icon={faHandSpock} onClick={handleClick} name='spock' /> */}
            
            <GenerateIcon iconName={faHeart} name='heart' handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />
            <GenerateIcon iconName={faThumbsUp} name='thumbsUp' handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />
            <GenerateIcon iconName={faGrin} name='grin' handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />
            <GenerateIcon iconName={faSurprise} name='surprise' handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />
            <GenerateIcon iconName={faHandsClapping} name='clap' handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />
            <GenerateIcon iconName={faHandSpock} name='spock' handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />
        </div>
    )
}

let GenerateIcon = ({iconName, name, handleReactionName, handleShowReactions}) => {
    let [tooltipText, setTooltipText] = useState(null)

    let handleClick = (evt) => {
        let gotName = evt.target.getAttribute("name") || evt.target.parentNode.getAttribute("name")
        handleReactionName(gotName)
        handleShowReactions()
        // setTooltipText(gotName)
    }

    // let updateTooltipText = value => setTooltipText(value)

    let handleMouseEnter = () => {
        // handleUpdate(()=>{}, null, updateTooltipText)
        if (name === 'heart') {
            setTooltipText('faHeart')
        } else if (name === 'thumbsUp') {
            setTooltipText('faThumbsUp')
        } else if (name === 'grin') {
            setTooltipText('faGrin')
        } else if (name === 'surprise') {
            setTooltipText('faSurprise')
        } else if (name === 'clap') {
            setTooltipText('faHandsClapping')
        } else if (name === 'spock') {
            setTooltipText('faHandSpock')
        }
    }

    return (
        <p onMouseEnter={handleMouseEnter}>
            <FontAwesomeIcon icon={iconName && iconName} onClick={handleClick} name={name} />
            <span>{tooltipText}</span>
        </p>
    )
}

let showIconOrToltip = (updateIcon, reactionName, updateTooltip, tooltipText) => {
    if (reactionName === 'heart') {
        // !tooltipText ? updateIcon(faHeart) : updateTooltip(tooltipText)
        // handleUpdate(updateIcon, faHeart, updateTooltip, tooltipText)
        handleUpdate(updateIcon, faHeart, updateTooltip, 'tooltipText for heart icon')
    } else if (reactionName === 'thumbsUp') {
        // !tooltipText ? updateIcon(faThumbsUp) : updateTooltip(tooltipText)
        handleUpdate(updateIcon, faThumbsUp, updateTooltip, tooltipText)
    } else if (reactionName === 'grin') {
        // !tooltipText ? updateIcon(faGrin) : updateTooltip(tooltipText)
        handleUpdate(updateIcon, faGrin, updateTooltip, tooltipText)
    } else if (reactionName === 'surprise') {
        // !tooltipText ? updateIcon(faSurprise) : updateTooltip(tooltipText)
        handleUpdate(updateIcon, faSurprise, updateTooltip, tooltipText)
    } else if (reactionName === 'clap') {
        // !tooltipText ? updateIcon(faHandsClapping) : updateTooltip(tooltipText)
        handleUpdate(updateIcon, faHandsClapping, updateTooltip, tooltipText)
    } else if (reactionName === 'spock') {
        // !tooltipText ? updateIcon(faHandSpock) : updateTooltip(tooltipText)
        handleUpdate(updateIcon, faHandSpock, updateTooltip, tooltipText)
    }
}

let handleUpdate = (updateIcon, icon, updateTooltip, tooltipText) => {
    !tooltipText ? updateIcon(icon) : updateTooltip(tooltipText)
}

export default UserActions