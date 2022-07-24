import React from 'react'
import './styles.css'

function PrimaryNavigation() {
    let items = ['Summary', 'Activity', 'Notifications', 'Preferences']
    let renderItems = () => items.map(item => <li key={item}>{item}</li>)
  return (
    <section className='primary-navigation'>
        <nav>
            <ul>
                {renderItems()}
            </ul>
        </nav>
    </section>
  )
}

export default PrimaryNavigation