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
        <p className='hero-text' aria-label='forum slogan' role={'article'}>
            <h1>Web Forum</h1>
            <em>For you, By you, Of you, democracy, all inclusive!!</em>
        </p>
    )
}

let ShowInfographic = () => {
    return <p aria-label='featured infographic' role={'article'}><img src={infoGraphics} alt='infographic about web communications' /></p>
}

export default HeroContent