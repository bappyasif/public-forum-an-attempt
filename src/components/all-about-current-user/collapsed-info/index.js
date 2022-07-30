import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './styles.css'

function CollapsedInfo({expanded, handleToggle}) {
    // let [expanded, setExpanded] = useState(false)
    // let handleToggle = () => setExpanded(!expanded)

  return (
    <section className='collapsed-info'>
        <ControlsInfo expanded={expanded} handleToggle={handleToggle} />
        <UserAvatar expanded={expanded} />
        <UserInfoTextualsOnly expanded={expanded} />
    </section>
  )
}

let UserInfoTextualsOnly = ({expanded}) => {
    return (
        <div className='profile-names' style={{left: expanded ? '110px' : '72px'}}>
            <h1 style={{fontSize: expanded ? 'xx-large' : 'x-large'}}>user name</h1>
            <h2 style={{fontSize: expanded ? 'x-large' : 'medium'}}>profile name</h2>
        </div>
    )
}

let ControlsInfo = ({expanded, handleToggle}) => {
    return (
        <section className='controls-info' onClick={handleToggle}>
            <div><FontAwesomeIcon icon={expanded ? faAngleDoubleUp : faAngleDoubleDown} /><span>{expanded ? 'Collapse' : 'Expand'}</span></div>
        </section>
    )
}

let UserAvatar = ({expanded}) => {
    return (
        // <img src={`https://unsplash.it/${expanded ? 110 : 62}`} alt='user avatar in display' />
        <img style={{width: expanded ? '100px': '62px'}} src='https://unsplash.it/62' alt='user avatar in display' />
    )
}

export default CollapsedInfo