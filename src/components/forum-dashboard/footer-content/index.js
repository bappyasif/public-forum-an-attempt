import React from 'react'
import './styles.css'

function FooterContents() {
  return (
    <div className='footer-content'>
        <LeftSide />
        <RightSide />
    </div>
  )
}

let RightSide = () => {
    return (
        <div className='footer-right-container'>
            <aside>copyright by ab but codebase and design layout is free to use with a mention!!</aside>
        </div>
    )
}

let LeftSide = () => {
    return (
        <div className='footer-left-container'>
            <p>this is to let you know about some notable and important info about ourselves and how you can contact wth us and continue to grow with us, help you , help us</p>
            <ul>
                <li><nav><a href='http://localhost:3000/'>link 01</a></nav></li>
                <li><nav><a href='http://localhost:3000/'>link 02</a></nav></li>
                <li><nav><a href='http://localhost:3000/'>link 03</a></nav></li>
                <li><nav><a href='http://localhost:3000/'>link 04</a></nav></li>
            </ul>
        </div>
    )
}

export default FooterContents