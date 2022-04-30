import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../components-container'
import { useOnClickOutside } from '../hooks'

export let SearchComponent = ({ blurUpdater }) => {
  let [text, setText] = useState(null)
  let handleChange = event => setText(event.target.value)
  return (
    <div className='search-component'>
      <input aria-placeholder='search here' placeholder='search here' type={'text'} onChange={handleChange} onBlur={blurUpdater} autoFocus={true} defaultValue={text} />
    </div>
  )
}

export let IconElement = ({ icon, altText }) => {
  let [showSearch, setShowSearch] = useState(false)
  let [showMenu, setShowMenu] = useState(false)

  let handleShowSearchComponent = () => setShowSearch(true)
  let blurUpdater = () => setShowSearch(false)

  let showElement = () => {
    if (altText === 'Menu') {

      return <ElementWrapper icon={icon} altText={altText} clickHnadler={() => setShowMenu(!showMenu)} Component={MenuDropdown} stateValue={showMenu} setStateValue={setShowMenu} />

    } else {

      return <ElementWrapper icon={icon} altText={altText} clickHnadler={handleShowSearchComponent} blurUpdater={blurUpdater} Component={SearchComponent} stateValue={showSearch} />
    }
  }
  return showElement()
}

let ElementWrapper = ({ icon, altText, clickHnadler, blurUpdater, Component, stateValue, setStateValue }) => {
  let ref = useRef(null)
  useOnClickOutside(ref, () => setStateValue(false))

  return (
    <li className='element-wrapper' aria-label={altText} ref={altText === 'Menu' ? ref : null} style={{ position: altText === 'Menu' && 'relative' }}>
      {
        altText === "Search"
          ?
          !stateValue && <a href='http://localhost:3000/'><img className='icon-view' src={icon} alt={altText} onClick={clickHnadler} /></a>
          :
          <a href='http://localhost:3000/'><img className='icon-view' src={icon} alt={altText} onClick={clickHnadler} /></a>
      }

      {stateValue && <Component blurUpdater={altText === 'Search' ? blurUpdater : null} />}
    </li>
  )
}

export let MenuDropdown = () => {
  let allStates = useContext(UserContext)

  let options = allStates.categories.map(name => <ShowDropDownOption key={name} name={name} />)

  // let options = ["Latest", "Top", "Badges", "Users"].map(name => <ShowDropDownOption key={name} name={name} />)

  return <nav className='menu-dropdown' aria-label='dropdown-list-main-menu'>{options}</nav>
}

let ShowDropDownOption = ({ name }) => {
  return <li aria-label={name}><a href='http://localhost:3000/'>{name}</a></li>
}