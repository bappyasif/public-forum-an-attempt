import { faEdit, faPlus, faTools, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import LeftNavigationPanel from '../left-nav-panel'
import './styles.css'

function AccountProfile() {
    return (
        <div className='account-profile'>
            {/* <LeftNavigationPanel /> */}
            <UserDetails />
        </div>
    )
}

let UserDetails = () => {
    return (
        <div className='user-details'>
            <UserIntro />
            <ProfilePicture />
            <AccountEmail pe={'ab@cd.efgh'} />
            <AssociatedAccounts acc_email={'ab@cd.efgh'} />
            <UserName uName={'a b'} />
            <SaveChanges />
        </div>
    )
}

let SaveChanges = () => {
    return (
        <button className='save-btn'>Save Changes</button>
    )
}

let UserName = ({uName}) => {
    let [name, setName] = useState()
    
    useEffect(() => setName(uName), [uName])
    
    let handleName = (evt) => setName(evt.target.value)

    return (
        <div className='un-wrapper'>
            <h2>Name</h2>
            <input type={'text'} value={name || uName} onChange={handleName} />
            <p>your full name (optional)</p>
        </div>
    )
}

let AssociatedAccounts = ({acc_email}) => {
    return (
        <div className='aa-wrapper'>
            <h2>Associated Accounts</h2>
            <p className='acc-infos'>freecodecamp.org <span>{acc_email}</span> <FontAwesomeIcon icon={faTrashCan} /></p>
        </div>
    )
}

let AccountEmail = ({ pe }) => {
    return (
        <div className='ae-wrapper'>
            <h2>Email</h2>
            <div className='email-infos'>
                <p className='primary-email'>
                    <div className='email-div'>
                        <h4>{pe}</h4>
                        <h4>primary</h4>
                    </div>
                    <h5>Never shown to public</h5>
                </p>
                <p className='alternative-email'>
                    <FontAwesomeIcon icon={faTools} />
                    <h4><FontAwesomeIcon icon={faPlus} /> Add An Alternative Email</h4>
                </p>
            </div>
        </div>
    )
}

let ProfilePicture = () => {
    return (
        <div className='pp-wrapper'>
            <h2>Profile Picture</h2>
            <div className='img-div'>
                <img src='http://unsplash.it/101' alt='user visual' />
                <FontAwesomeIcon icon={faEdit} />
            </div>
        </div>
    )
}

let UserIntro = ({ username = 'a b' }) => {
    return (
        <div>
            <h2>Username</h2>
            <p>{username}</p>
            <p>People can mention you as @{username}</p>
        </div>
    )
}

export default AccountProfile