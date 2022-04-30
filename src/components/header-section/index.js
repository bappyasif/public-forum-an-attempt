import React from 'react'
import search from '../assets/search.png'
import menu from '../assets/menu.png'
import forumLogo from '../assets/forum-logo.png'
import './styles.css'
import { IconElement} from '../general-purpose-use-hof'

function HeaderUI() {
  return (
    <div className='header-section'>
      <ForumLogo />
      <HeaderRightSideUI />
    </div>
  )
}

let HeaderRightSideUI = () => {
  return (
    <div className='right-side-ui-wrapper'>
      <LoginOrSignupButtons />
      <SearchAndMenuIcons />
    </div>
  )
}

let SearchAndMenuIcons = () => {
  let icons = ["Search", "Menu"].map(name => <IconElement key={name} altText={name} icon={name === 'Search' ? search : menu} />)
  return (
    <div className='header-icons'>
      {icons}
    </div>
  )
}

let LoginOrSignupButtons = () => {
  let navs = ["Signup", "Login"].map(name => <NavElement key={name} name={name} />)
  return (
    <div className='navs'>
      {navs}
    </div>
  )
}

let NavElement = ({ name }) => {
  return (
    <nav className='nav-element'>{name}</nav>
  )
}

let ForumLogo = () => {
  return (
    // <img src={logo} alt='forum logo' />
    <img src={forumLogo} alt='forum logo' />
  )
}

export default HeaderUI