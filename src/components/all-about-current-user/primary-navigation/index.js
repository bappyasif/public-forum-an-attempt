import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { baseUri } from '../../../App'
import './styles.css'

function PrimaryNavigation() {
  let [activeTab, setActiveTab] = useState(null)
  let handleActiveTab = name => setActiveTab(name)

  let items = ['Summary', 'Activity', 'Notifications', 'Preferences']
  let renderItems = () => items.map(item => <RenderNavigationItem key={item} name={item} handleActiveTab={handleActiveTab} activeTabName={activeTab} />)
  return (
    <section className='primary-navigation'>
      <nav>
        <ul role={"tablist"}>
          {renderItems()}
        </ul>
      </nav>
    </section>
  )
}

let RenderNavigationItem = ({ name, handleActiveTab, activeTabName }) => {
  let handleClicked = () => {
    handleActiveTab(name);
  }

  return (
    <li
      role={'tab'}
      onClick={handleClicked}
      className={`${activeTabName === name ? 'active' : 'inactive'}`}
      aria-selected={`${activeTabName === name ? true : false}`}
    >
      <Link to={`${baseUri}/u/${name.toLowerCase()}`} >{name}</Link>
    </li>
    // <li role={'tab'} onClick={handleClicked} className={`${clicked ? 'active' : ''}`}>{name}</li>
  )
}

export default PrimaryNavigation