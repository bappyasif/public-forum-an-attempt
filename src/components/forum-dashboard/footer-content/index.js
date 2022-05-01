import React from 'react'
import './styles.css'

function FooterContents() {
    return (
        <footer className='footer-content'>
            <LeftSide />
            <RightSide />
        </footer>
    )
}

let RightSide = () => {
    return (
        <div className='footer-right-container'>
            <em>copyright by ab but codebase and design layout is free to use with a mention!!</em>
        </div>
    )
}

let LeftSide = () => {
    return (
        <section className='footer-left-container'>
            <h2>this is to let you know about some notable and important info about ourselves and how you can contact wth us and continue to grow with us, help you , help us</h2>
            <nav aria-label={'footer-navigation'}>
                <ul>
                    <li><a href='http://localhost:3000/'>link 01</a></li>
                    <li><a href='http://localhost:3000/'>link 02</a></li>
                    <li><a href='http://localhost:3000/'>link 03</a></li>
                    <li><a href='http://localhost:3000/'>link 04</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default FooterContents