import React from 'react'
import search from '../assets/search.png'
import menu from '../assets/menu.png'
import forumLogo from '../assets/forum-logo.png'
import './styles.css'
import { IconElement } from '../general-purpose-use-hof'

function HeaderUI({setAllStates}) {
  return (
    <header className='header-section' aria-label='forum header' role={'banner'}>
      <ForumLogo />
      <HeaderRightSideUI setAllStates={setAllStates} />
    </header>
  )
}

let HeaderRightSideUI = ({setAllStates}) => {
  return (
    <section className='right-side-ui-wrapper' aria-label='main navigations'>
      <LoginOrSignupButtons />
      <SearchAndMenuIcons setAllStates={setAllStates} />
    </section>
  )
}

let SearchAndMenuIcons = ({setAllStates}) => {
  let icons = ["Search", "Menu"].map(name => <IconElement key={name} altText={name} icon={name === 'Search' ? search : menu} setAllStates={setAllStates} />)
  return (
    <nav aria-label='MenuDropdown'>
      <ul className='header-icons' aria-label='menu icons'>
        {icons}
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