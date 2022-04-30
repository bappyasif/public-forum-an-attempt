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
        <section className='hero-text'>
            <h1>Web Forum</h1>
            <em>For you, by you, inclusive, democracy!</em>
        </section>
    )
}

let ShowInfographic = () => {
    return <img src={infoGraphics} alt='infographic about web communications' />
}

export default HeroContent