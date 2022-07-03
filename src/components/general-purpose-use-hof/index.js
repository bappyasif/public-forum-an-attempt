import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { baseUri, handleUpdateStatesValue, UserContext } from '../../App'
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
    <li aria-label={altText} className='element-wrapper' ref={altText === 'Menu' ? ref : null} style={{ position: altText === 'Menu' && 'relative' }}>
      {
        altText === "Search"
          ?
          !stateValue && <img className='icon-view' src={icon} alt={altText} onClick={clickHnadler} />
          :
          <img className='icon-view' src={icon} alt={altText} onClick={clickHnadler} />
      }

      {stateValue && <Component blurUpdater={altText === 'Search' ? blurUpdater : null} />}
    </li>
  )
}

export let MenuDropdown = () => {
  let allStates = useContext(UserContext)

  let options = allStates.categoriesInfo.map(item => <ShowDropDownOption key={item.name} name={item.name} />)

  return <nav className='menu-dropdown' aria-label='dropdown-list-main-menu'>{options}</nav>
}

let ShowDropDownOption = ({ name }) => {
  return <li aria-label={name}><a href='http://localhost:3000/'>{name}</a></li>
}

export let RenderListOfElements = ({ list, wrapperClassName, elementClassName, setAllStates }) => {
  let listElementNames = () => list.map(name => <RenderListItem key={name} name={name} itemClassName={elementClassName} setAllStates={setAllStates} />)
  return (
    <ul className={wrapperClassName} aria-label='prominent topics'>
      {listElementNames()}
    </ul>
  )
}

let RenderListItem = ({ name, itemClassName, setAllStates }) => {
  // let allStates = useContext(UserContext)

  let handleClick = () => {
    handleUpdateStatesValue(setAllStates, 'tagCategoryName', name)
    // console.log('herehereherere')
  }

  return (
    <li aria-label={name} className={itemClassName} tabIndex={'0'} onClick={handleClick}>
      {/* {itemClassName.includes('number') !== true ? <a href={`${baseUri}/category`} tabIndex={'-1'}>{name}</a> : name} */}
      {itemClassName.includes('number') !== true ? <Link to={`${baseUri}/category`} tabIndex={'-1'}>{name}</Link> : name}
    </li>
  )
}