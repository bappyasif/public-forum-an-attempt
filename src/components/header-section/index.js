import React, { useRef, useState } from 'react'
import search from '../assets/search.png'
import menu from '../assets/menu.png'
import forumLogo from '../assets/forum-logo.png'
import './styles.css'
import { IconElement } from '../general-purpose-use-hof'
import { useOnClickOutside } from '../hooks'

function HeaderUI({ setAllStates }) {
  return (
    <header className='header-section' aria-label='forum header' role={'banner'}>
      <ForumLogo />
      <HeaderRightSideUI setAllStates={setAllStates} />
    </header>
  )
}

let HeaderRightSideUI = ({ setAllStates }) => {
  return (
    <section className='right-side-ui-wrapper' aria-label='main navigations'>
      <LoginOrSignupButtons />
      <SearchAndMenuIcons setAllStates={setAllStates} />
      {/* <UserInfo /> */}
    </section>
  )
}

let UserInfo = () => {
  let [showDD, setShowDD] = useState(null)

  let ref = useRef(null)

  useOnClickOutside(ref, () => setShowDD(false))

  let handleShowDD = () => setShowDD(!showDD)

  return (
    // <img src='https://unsplash.it/47/51' alt='when logged in user info will show up' />
    <li className='user-info-dd' onClick={handleShowDD} ref={ref}>
      <a className='uidd' href='#' aria-label='user info drop down'>
        <img className='uidd' src='https://unsplash.it/47' alt='when logged in user info will show up' />
        {showDD ? <ShowProfileDropDown /> : null}
      </a>
    </li>
  )
}

let ShowProfileDropDown = ({ showDD }) => {
  let ddItems = ['Summary', 'Activity', 'Preference', 'Logout']

  let handleClick = evt => console.log(evt.target.textContent)

  let renderItems = () => ddItems.map(item => <li key={item} onClick={handleClick}><a href='#' aria-label={item}>{item}</a></li>)

  return (
    <ul className={`${showDD ? 'show-dd' : 'hide-dd'}`}>
      {renderItems()}
    </ul>
  )
}

let SearchAndMenuIcons = ({ setAllStates }) => {
  let icons = ["Search", "Menu"].map(name => <IconElement key={name} altText={name} icon={name === 'Search' ? search : menu} setAllStates={setAllStates} />)
  return (
    <nav aria-label='MenuDropdown'>
      <ul className='header-icons' aria-label='menu icons'>
        {icons}
        <UserInfo />
      </ul>
    </nav>
  )
}

let LoginOrSignupButtons = () => {
  let navs = ["Signup", "Login"].map(name => <NavElement key={name} name={name} />)
  return (
    <nav aria-label='inclusions navgations'>
      <ul className='navs' aria-label='user login or signup'>
        {navs}
      </ul>
    </nav>
  )
}

let NavElement = ({ name }) => {
  return (
    <li className='nav-element' aria-label={name} title={name}><a href='http://localhost:3000/' tabIndex='0'>{name}</a></li>
  )
}

let ForumLogo = () => {
  return (
    <img src={forumLogo} alt='your favourite forum logo' tabIndex={'0'} />
  )
}

export default HeaderUI