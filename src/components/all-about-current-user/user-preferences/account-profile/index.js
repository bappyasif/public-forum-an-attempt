import React from 'react'
import LeftNavigationPanel from '../left-nav-panel'
import './styles.css'

function AccountProfile() {
  return (
    <div className='account-profile'>
        <LeftNavigationPanel />
        <UserDetails />
    </div>
  )
}

let UserDetails = () => {
    return (
        <div className='user-details'>
            <UserIntro />
        </div>
    )
}

let UserIntro = ({username = 'a b'}) => {
    return (
        <div>
            <h2>Username</h2>
            <p>{username}</p>
            <p>People can mention you as @{username}</p>
        </div>
    )
}

export default AccountProfile