import React from 'react'
import infoGraphics from '../assets/resized-infographic.png'
import './styles.css'

function HeroContent() {
  return (
    <section className='hero-contents-wrapper' aria-label='forum slogan, featured infographic'>
        <ShowForumWelcomeText />
        <ShowInfographic />
    </section>
  )
}

let ShowForumWelcomeText = () => {
    return (
        <aside className='hero-text' aria-label='forum slogan'>
            <h1>Web Forum</h1>
            <em>For you, By you, Of you, democracy, all inclusive!!</em>
        </aside>
    )
}

let ShowInfographic = () => {
    return <aside aria-label='featured infographic'><img src={infoGraphics} alt='infographic about web communications' /></aside>
}

export default HeroContent