import React from 'react'
import search from '../assets/search.png'
import menu from '../assets/menu.png'
import forumLogo from '../assets/forum-logo.png'
import './styles.css'
import { IconElement } from '../general-purpose-use-hof'

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
    <nav aria-label='MenuDropdown'>
      <ul className='header-icons'>
        {icons}
      </ul>
    </nav>
  )
}

let LoginOrSignupButtons = () => {
  let navs = ["Signup", "Login"].map(name => <NavElement key={name} name={name} />)
  return (
    <nav role={'navigation'}>
      <ul className='navs'>
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