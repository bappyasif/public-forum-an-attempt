import React, { useRef, useState } from 'react'
import { useOnClickOutside } from '../../utility-functions'

export let SearchComponent = ({ blurUpdater }) => {
  let [text, setText] = useState(null)
  let handleChange = event => setText(event.target.value)
  return (
    <div className='search-component'>
      <input type={'text'} onChange={handleChange} onBlur={blurUpdater} autoFocus={true} defaultValue={text} />
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
    <div className='element-wrapper' ref={altText === 'Menu' ? ref : null} style={{ position: altText === 'Menu' && 'relative' }}>
      {
        altText === "Search"
          ?
          !stateValue && <img className='icon-view' src={icon} alt={altText} onClick={clickHnadler} />
          :
          <img className='icon-view' src={icon} alt={altText} onClick={clickHnadler} />
      }

      {stateValue && <Component blurUpdater={altText === 'Search' ? blurUpdater : null} />}
    </div>
  )
}

export let MenuDropdown = () => {
  let options = ["Latest", "Top", "Badges", "Users"].map(name => <ShowDropDownOption key={name} name={name} />)
  return <select className='menu-dropdown'>{options}</select>
}

let ShowDropDownOption = ({ name }) => {
  return <option value={name}>{name}</option>
}