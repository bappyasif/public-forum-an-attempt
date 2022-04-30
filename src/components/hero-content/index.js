import React from 'react'
import infoGraphics from '../assets/resized-infographic.png'
import './styles.css'

function HeroContent() {
  return (
    <div className='hero-contents-wrapper'>
        <ShowForumWelcomeText />
        <ShowInfographic />
    </div>
  )
}

let ShowForumWelcomeText = () => {
    return (
        <div className='hero-text'>
            <header>Web Forum</header>
            <div>For you, by you, inclusive, democracy!</div>
        </div>
    )
}

let ShowInfographic = () => {
    return <img src={infoGraphics} alt='infographic about web communications' />
}

export default HeroContent