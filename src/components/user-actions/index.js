import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faLink, faEllipsis, faReply, faThumbsUp, faSurprise, faHandsClapping, faFlag } from "@fortawesome/free-solid-svg-icons"
import { faBookmark, faGrin, faHandSpock, faHeart } from "@fortawesome/free-regular-svg-icons"
import React, { useContext, useEffect, useState } from 'react'
import "./styles.css"
import WysiwygEditor, { WysiwygModalFooter } from '../WysiwygEditor'
import { handleUpdateStatesValue, UserContext } from '../../App'

function UserActions({ showReactions, handleMouseIn, handleMouseOut, fromReplies, id, setAllStates }) {
    let [heartCount, setHeartCount] = useState(0);
    let [whichIcon, setWhichIcon] = useState(null);
    let [rndNum, setRndNum] = useState(null)
    let [tooltipText, setTooltipText] = useState(null)
    let [userActionIconName, setUserActionIconName] = useState(null)

    let [reactionName, setReactionName] = useState(null)
    let handleReactionName = value => setReactionName(value);

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
        // let gotId = evt.target.parentNode.id || evt.target.id || evt.target.parentNode.parentNode.id;
        let gotCN = evt.target.parentNode.className || evt.target.className || evt.target.parentNode.parentNode.className;
        // console.log(gotId, 'gotID!!', gotCN)
        gotCN && setUserActionIconName(gotCN);
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

    let handleFaHeartKeypressed = evt => {

        handleKeyPressed(evt);

        if (evt.keyCode === 13) {
            handleMouseIn()
        } else if (evt.keyCode === 27) {
            handleMouseOut()
        }
    }

    let handleOptionIconKeypressed = (evt) => {
        handleKeyPressed(evt)
    }

    let handleKeyPressed = (evt) => {
        if (evt.keyCode === 13) {
            handleHover(evt)
        } else if (evt.keyCode === 27) {
            setUserActionIconName('')
        }
    }

    let OptionElement = () => {
        return (
            <p className='option-icon' tabIndex={'0'} role={'button'} aria-label='option icon' onKeyUp={handleOptionIconKeypressed} onMouseEnter={handleHover} onMouseLeave={() => setUserActionIconName('')} style={{ position: 'relative' }}>
                <FontAwesomeIcon icon={faEllipsis} onClick={handleOptionsVisible} />
                {userActionIconName === 'option-icon' && <span className='ua-tooltips' role={'tooltip'}>{tooltipText}</span>}
            </p>
        )
    }

    return (
        <section className='user-actions' aria-label={fromReplies ? 'reply container' + id : 'reply container'}>
            {<FontAwesomeIcon id='topic-user-reply-reaction' icon={whichIcon && whichIcon} style={{ visibility: fromReplies && rndNum > .2 ? 'visible' : 'hidden' }} />}

            <div>
                {heartCount > 0 && reactionName === 'heart' && <span style={{ marginRight: '-13px' }} >{heartCount}</span>}

                <PrimaryReaction
                    handleFaHeartKeypressed={handleFaHeartKeypressed}
                    handleHover={handleHover}
                    setUserActionIconName={setUserActionIconName}
                    showReactions={showReactions}
                    handleMouseIn={handleMouseIn}
                    reactionName={reactionName}
                    whichIcon={whichIcon}
                    userActionIconName={userActionIconName}
                    tooltipText={tooltipText}
                />

                {<ShowReactions handleShowReactions={handleMouseOut} showReactions={showReactions} handleReactionName={handleReactionName} />}

                <LinkComponent
                    handleFaLinkKeypressed={handleFaHeartKeypressed}
                    handleHover={handleHover}
                    setUserActionIconName={setUserActionIconName}
                    userActionIconName={userActionIconName}
                    tooltipText={tooltipText}
                />

                {optionsVisible ? <ShowOptions handleOptionsHidden={handleOptionsHidden} userActionIconName={userActionIconName} tooltipText={tooltipText} handleHover={handleHover} setUserActionIconName={setUserActionIconName} /> : <OptionElement />}

                <ReplyComponent
                    handleHover={handleHover}
                    setUserActionIconName={setUserActionIconName}
                    tooltipText={tooltipText}
                    userActionIconName={userActionIconName}
                    setAllStates={setAllStates}
                />
            </div>

        </section>
    )
}

let LinkComponent = ({ handleFaLinkKeypressed, handleHover, setUserActionIconName, userActionIconName, tooltipText }) => {
    return (
        <p
            className='fa-link'
            role={'button'}
            tabIndex={'0'}
            aria-label='included link/s'
            onKeyUp={handleFaLinkKeypressed}
            onMouseEnter={handleHover}
            onMouseLeave={() => setUserActionIconName('')}
            style={{ position: 'relative' }}
        >
            <FontAwesomeIcon icon={faLink} />
            <TooltipText userActionIconName={userActionIconName} tooltipText={tooltipText} tttFor={'fa-link'} />
        </p>
    )
}

let PrimaryReaction = ({ handleFaHeartKeypressed, handleHover, setUserActionIconName, showReactions, handleMouseIn, reactionName, whichIcon, userActionIconName, tooltipText }) => {
    return (
        <p
            className='fa-heart'
            tabIndex={'0'}
            role={'button'}
            aria-label='choose reaction'
            onKeyUp={handleFaHeartKeypressed}
            onMouseEnter={handleHover}
            onMouseLeave={() => setUserActionIconName('')}
            style={{ position: 'relative' }}
        >
            <FontAwesomeIcon
                icon={showReactions ? faHeartbeat : whichIcon ? whichIcon : faHeart}
                onMouseEnter={handleMouseIn}
                style={{ position: "relative", color: reactionName ? 'var(--primary-clr)' : 'none' }}
            />
            <TooltipText userActionIconName={userActionIconName} tooltipText={tooltipText} tttFor={'fa-heart'} />

        </p>
    )
}

let ReplyComponent = ({ handleHover, setUserActionIconName, tooltipText, userActionIconName, setAllStates }) => {
    let [showModal, setShowModal] = useState(null)
    let handleShowModal = () => setShowModal(true)

    let handleCloseModal = (evt) => {
        setShowModal(false)
        evt.stopPropagation()
    }
    
    return (
        <p
            className='reply-div'
            role={'button'}
            aria-label='reply to this topic'
            onMouseEnter={handleHover}
            onMouseLeave={() => setUserActionIconName('')}
            onClick={handleShowModal}
            style={{ position: 'relative' }}
        >
            <FontAwesomeIcon icon={faReply} className='reply-icon' onMouseEnter={handleHover} />
            <span>Reply</span>
            <TooltipText userActionIconName={userActionIconName} tooltipText={tooltipText} tttFor={'reply-div'} />
            {showModal && <ShowReplyModal handleClose={handleCloseModal} setAllStates={setAllStates} />}
        </p>
    )
}

let ShowReplyModal = ({ handleClose, setAllStates }) => {
    let [markdownContents, setMarkdownContents] = useState(null);
    
    let allStates = useContext(UserContext);
    
    let handleMarkdownContent = () => {
        let updatedData;
        
        let curateData = {
            id: '01',
            name: "some user",
            picUrl: "https://unsplash.it/47",
            replyText: markdownContents,
            postedTime: "44m"
        }

        if (allStates['topicRepliesByUser']) {
            allStates['topicRepliesByUser']?.push(curateData)
            updatedData = allStates['topicRepliesByUser']
        } else {
            updatedData = [curateData]
        }

        // console.log(updatedData, 'updatedData!!')

        handleUpdateStatesValue(setAllStates, 'topicRepliesByUser', updatedData)
    }
    let handleReplies = (evt) => {
        // console.log('handle replies');
        handleClose(evt)
    }
    return (
        <div className='show-reply-modal-wrapper'>
            <p>some user</p>
            <WysiwygEditor setMarkdownContents={setMarkdownContents} />
            <WysiwygModalFooter
                handleFunctionality={handleReplies}
                closeModal={handleClose}
                handleMarkdownContent={handleMarkdownContent}
            />
        </div>
    )
}

let TooltipText = ({ userActionIconName, tooltipText, tttFor }) => {
    return (
        userActionIconName === tttFor
        &&
        <span className='ua-tooltips' role={'tooltip'}>{tooltipText}</span>
    )
}

let ShowOptions = ({ handleOptionsHidden, userActionIconName, tooltipText, handleHover, setUserActionIconName }) => {
    let handleClick = () => handleOptionsHidden()
    return (
        <div className='show-options' role={'region'} aria-label='show options'>
            <p role={'article'} aria-label='flag this' id='flag-icon' onMouseEnter={handleHover} onMouseLeave={() => setUserActionIconName('')} style={{ position: 'relative' }}>
                <FontAwesomeIcon icon={faFlag} onClick={handleClick} />
                {userActionIconName === 'flag-icon' && <span className='ua-tooltips' role={'tooltip'}>{tooltipText}</span>}
            </p>

            <p id='bookmark-icon' role={'article'} aria-label='bookmark this' onMouseEnter={handleHover} onMouseLeave={() => setUserActionIconName('')} style={{ position: 'relative' }}>
                <FontAwesomeIcon icon={faBookmark} onClick={handleClick} />
                {userActionIconName === 'bookmark-icon' && <span className='ua-tooltips' role={'tooltip'}>{tooltipText}</span>}
            </p>
        </div>
    )
}

let ShowReactions = ({ handleShowReactions, showReactions, handleReactionName }) => {
    let iconsItems = [
        { icon: faHeart, name: 'heart' }, { icon: faThumbsUp, name: 'thumbsUp' },
        { icon: faGrin, name: 'grin' }, { icon: faSurprise, name: 'surprise' },
        { icon: faHandsClapping, name: 'clap' }, { icon: faHandSpock, name: 'spock' }
    ];

    let renderIconsItems = () => iconsItems.map(item => <GenerateIcon key={item.name} iconName={item.icon} name={item.name} handleReactionName={handleReactionName} handleShowReactions={handleShowReactions} />)

    return (
        <div aria-label='reactions options to choose' className={`reactions ${showReactions ? 'reactions-picker' : 'fold-down'}`} onMouseLeave={handleShowReactions}>
            {renderIconsItems()}
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