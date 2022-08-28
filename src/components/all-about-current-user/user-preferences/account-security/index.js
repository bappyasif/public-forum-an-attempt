import { faLinux } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles.css'

function AccountSecurity() {
    return (
        <div className='as-wrapper'>
            <PasswordReset />
            <TwoFactorAuthentication />
            <RecentlyUsedDevices />
        </div>
    )
}

let RecentlyUsedDevices = () => {
    return (
        <div className='rud-wrapper'>
            <h2>Recently Used Devices</h2>
            <div className='di-wrapper'>
                {/* <i class="fa-brands fa-linux"></i> */}
                <FontAwesomeIcon icon={faLinux} />
                {/* <FontAwesomeIcon icon="fa-brands fa-linux" /> */}
                <div className='dev-info'>
                    <h3>Linux Computer - <span>Somewhere Here</span></h3>
                    <h4>World</h4>
                    <h5>Broswer | active now</h5>
                </div>
            </div>
        </div>
    )
}

let TwoFactorAuthentication = () => {
    return (
        <div className='tf-wrapper'>
            <h2>Two - Factor Authentication</h2>
            <p>Protect your account with one-time use only security codes</p>
            <SharedActionBoxUi icon={faLock} text='Manage Two-Factor Authentication' />
        </div>
    )
}

let SharedActionBoxUi = ({ icon, text }) => {
    return (
        <p className='sab-ui'><FontAwesomeIcon icon={icon} /> <span>{text}</span></p>
    )
}

let PasswordReset = () => {
    return (
        <div className='pr-wrapper'>
            <h2>Password</h2>
            <SharedActionBoxUi icon={faEnvelope} text="Send Password Reset Email" />
            {/* <p><FontAwesomeIcon icon={faEnvelope} /> <span>Send Password Reset Email</span></p> */}
        </div>
    )
}

export default AccountSecurity