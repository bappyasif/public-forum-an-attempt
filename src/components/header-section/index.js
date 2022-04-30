import React from 'react'
import search from '../assets/search.png'
import menu from '../assets/menu.png'
import forumLogo from '../assets/forum-logo.png'
import './styles.css'
import { IconElement} from '../general-purpose-use-hof'

function HeaderUI() {
  return (
    <header className='header-section'>
      <ForumLogo />
      <HeaderRightSideUI />
    </header>
  )
}

let HeaderRightSideUI = () => {
  return (
    <section className='right-side-ui-wrapper'>
      <LoginOrSignupButtons />
      <SearchAndMenuIcons />
    </section>
  )
}

let SearchAndMenuIcons = () => {
  let icons = ["Search", "Menu"].map(name => <IconElement key={name} altText={name} icon={name === 'Search' ? search : menu} />)
  return (
    <nav className='header-icons'>
      {icons}
    </nav>
  )
}

let LoginOrSignupButtons = () => {
  let navs = ["Signup", "Login"].map(name => <NavElement key={name} name={name} />)
  return (
    <nav className='navs'>
      {navs}
    </nav>
  )
}

let NavElement = ({ name }) => {
  return (
    <li className='nav-element' aria-label={name}><a href='http://localhost:3000/'>{name}</a></li>
    // <li className='nav-element' aria-label={name}>{name}</li>
  )
}

let ForumLogo = () => {
  return (
    <img src={forumLogo} alt='forum logo' />
  )
}

export default HeaderUI