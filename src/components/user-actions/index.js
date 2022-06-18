import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faLink, faEllipsis, faReply, faThumbsUp, faSurprise, faHandsClapping, faFlag } from "@fortawesome/free-solid-svg-icons"
import { faBookmark, faGrin, faHandSpock, faHeart } from "@fortawesome/free-regular-svg-icons"
import React, { useEffect, useState } from 'react'
import "./styles.css"

function UserActions({ showReactions, handleMouseIn, handleMouseOut, fromReplies }) {
    let [heartCount, setHeartCount] = useState(0);
    let [whichIcon, setWhichIcon] = useState(null);
    let [rndNum, setRndNum] = useState(null)
    let [tooltipText, setTooltipText] = useState(null)
    let [userActionIconName, setUserActionIconName] = useState(null)

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

    let handleHover = evt => {
        // let gotId = evt.target.id || evt.target.parentNode.id || evt.target.parentNode.parentNode.id;
        let gotId = evt.target.parentNode.id || evt.target.id || evt.target.parentNode.parentNode.id;
        // console.log(gotId, 'gotID!!')
        gotId && setUserActionIconName(gotId);
    }

    useEffect(() => {
        handleTooltipsText();
    }, [userActionIconName])

    let handleTooltipsText = () => {
        if (userActionIconName === 'fa-heart') {
            setTooltipText('Like this post')
        } else if (userActionIconName === 'fa-link') {
            setTooltipText('share a link to this post')
        } else if (userActionIconName === 'reply-div') {
            setTooltipText('Begin composing a reply to this post')
        } else if (userActionIconName === 'option-icon') {
            setTooltipText('Show more')
        } else if (userActionIconName === 'flag-icon') {
            setTooltipText('Privately flag this post for attention or send a private notification about it')
        } else if (userActionIconName === 'bookmark-icon') {
            setTooltipText('Bookmark this post')
        }
    }

    let OptionElement = () => {
        return (
            <p id='option-icon' role={'img'} aria-label='option icon' onMouseEnter={handleHover} onMouseLeave={() => setUserActionIconName('')} style={{ position: 'relative' }}>
                <FontAwesomeIcon icon={faEllipsis} onClick={handleOptionsVisible} />
                {userActionIconName === 'option-icon' && <span className='ua-tooltips' role={'tooltip'}>{tooltipText}</span>}
            </p>
        )
    }

    return (
        <section className='user-actions' aria-label='user actions'>
            {<FontAwesomeIcon id='topic-user-reply-reaction' icon={whichIcon && whichIcon} style={{ visibility: fromReplies && rndNum > .2 ? 'visible' : 'hidden' }} />}

            <div>
                {heartCount > 0 && reactionName === 'heart' && <span style={{ marginRight: '-13px' }} >{heartCount}</span>}

                <p id='fa-heart' role={'img'} aria-label='choose reaction' onMouseEnter={handleHover} onMouseLeave={() => setUserActionIconName('')} style={{ position: 'relative' }}>
                    <FontAwesomeIcon icon={showReactions ? faHeartbeat : whichIcon ? whichIcon : faHeart} onMouseEnter={handleMouseIn} style={{ position: "relative", color: reactionName ? 'var(--primary-clr)' : 'none' }} />
                    {userActionIconName === 'fa-heart' && <span className='ua-tooltips' role={'tooltip'}>{tooltipText}</span>}
                </p>

                {<ShowReactions handleShowReactions={handleMouseOut} showReactions={showReactions} handleReactionName={handleReactionName} />}

                <p id='fa-link' role={'img'} aria-label='included link/s' onMouseEnter={handleHover} onMouseLeave={() => setUserActionIconName('')} style={{ position: 'relative' }}>
                    <FontAwesomeIcon icon={faLink} />
                    {userActionIconName === 'fa-link' && <span className='ua-tooltips' role={'tooltip'}>{tooltipText}</span>}
                </p>

                {optionsVisible ? <ShowOptions handleOptionsHidden={handleOptionsHidden} userActionIconName={userActionIconName} tooltipText={tooltipText} handleHover={handleHover} setUserActionIconName={setUserActionIconName} /> : <OptionElement />}

                <p id='reply-div' role={'img'} aria-label='reply to this topic' onMouseEnter={handleHover} onMouseLeave={() => setUserActionIconName('')} style={{ position: 'relative' }}>
                    <FontAwesomeIcon icon={faReply} id='reply-icon' onMouseEnter={handleHover} />
                    <span>Reply</span>
                    {userActionIconName === 'reply-div' && <span className='ua-tooltips' role={'tooltip'}>{tooltipText}</span>}
                </p>
            </div>

        </section>
    )
}

let ShowOptions = ({ handleOptionsHidden, userActionIconName, tooltipText, handleHover, setUserActionIconName }) => {
    let handleClick = () => handleOptionsHidden()
    return (
        <div className='show-options' role={'contentinfo'} aria-label='show options'>
            <p role={'img'} aria-label='flag this' id='flag-icon' onMouseEnter={handleHover} onMouseLeave={() => setUserActionIconName('')} style={{ position: 'relative' }}>
                <FontAwesomeIcon icon={faFlag} onClick={handleClick} />
                { userActionIconName === 'flag-icon' && <span className='ua-tooltips' role={'tooltip'}>{tooltipText}</span>}
            </p>
            
            <p id='bookmark-icon' role={'img'} aria-label='bookmark this' onMouseEnter={handleHover} onMouseLeave={() => setUserActionIconName('')} style={{ position: 'relative' }}>
                <FontAwesomeIcon icon={faBookmark} onClick={handleClick} />
                { userActionIconName === 'bookmark-icon' && <span className='ua-tooltips' role={'tooltip'}>{tooltipText}</span>}
            </p>
        </div>
    )
}

let ShowReactions = ({ handleShowReactions, showReactions, handleReactionName }) => {

    return (
        <div id='reactions' role={'menu'} aria-label='reactions options to choose' className={`${showReactions ? 'reactions-picker' : 'fold-down'}`} onMouseLeave={handleShowReactions}>
            <GenerateIcon iconName={faHeart} name='heart' handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />
            <GenerateIcon iconName={faThumbsUp} name='thumbsUp' handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />
            <GenerateIcon iconName={faGrin} name='grin' handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />
            <GenerateIcon iconName={faSurprise} name='surprise' handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />
            <GenerateIcon iconName={faHandsClapping} name='clap' handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />
            <GenerateIcon iconName={faHandSpock} name='spock' handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />
        </div>
    )
}

let GenerateIcon = ({ iconName, name, handleReactionName, handleShowReactions }) => {
    let [tooltipText, setTooltipText] = useState(null)

    let handleClick = (evt) => {
        let gotName = evt.target.getAttribute("name") || evt.target.parentNode.getAttribute("name")
        handleReactionName(gotName)
        handleShowReactions()
    }

    let handleMouseEnter = () => {
        if (name === 'heart') {
            setTooltipText('react to this post with: heart')
        } else if (name === 'thumbsUp') {
            setTooltipText('react to this post with: thumbsUp')
        } else if (name === 'grin') {
            setTooltipText('react to this post with: grin')
        } else if (name === 'surprise') {
            setTooltipText('react to this post with: surprise')
        } else if (name === 'clap') {
            setTooltipText('react to this post with: clapping')
        } else if (name === 'spock') {
            setTooltipText('react to this post with: spock')
        }
    }

    return (
        <p tabIndex={'0'} role={'img'} aria-label={name} onMouseEnter={handleMouseEnter} onMouseLeave={() => setTooltipText('')} style={{ position: 'relative' }}>
            <FontAwesomeIcon icon={iconName && iconName} onClick={handleClick} name={name} />
            {tooltipText && <span id='tooltipText' role={'tooltip'}>{tooltipText}</span>}
        </p>
    )
}

export default UserActions