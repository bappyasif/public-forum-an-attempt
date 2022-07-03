import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { baseUri, handleUpdateStatesValue, UserContext } from '../../../App'
import './styles.css'

export function DashboardPanelLeftSide({ setAllStates }) {
  let allStates = useContext(UserContext)
  return (
    <section className='left-side-panel-container' aria-label='topics highlights'>
      <LeftSideGridHeader />
      <LeftSideGridTopics list={allStates.categoriesInfo} setAllStates={setAllStates} />
    </section>
  )
}

let LeftSideGridTopics = ({ list, setAllStates }) => {
  let renderTopics = () => list?.map(item => <RenderTopic key={item.name} topicItem={item} setAllStates={setAllStates} />)
  return (
    <ul className='lsp-topic-list' aria-label='featured topics'>
      {renderTopics()}
    </ul>
  )
}

let RenderTopic = ({ topicItem, setAllStates }) => {
  let { name, topics } = { ...topicItem }
  let handleClick = () => {
    handleUpdateStatesValue(setAllStates, 'tagCategoryName', name)
  }
  return (
    
      <li aria-label={name + ' topic  '} onClick={handleClick}>
        <Link to={`${baseUri}/category`}>
        <p tabIndex={'0'}>{name}</p>
        <p tabIndex={'0'}>{topics}</p>
        </Link>
      </li>
    
    // <li aria-label={name + ' topic  '} onClick={handleClick}>
    //   <p tabIndex={'0'}>{name}</p>
    //   <p tabIndex={'0'}>{topics}</p>
    // </li>
  )
}

let LeftSideGridHeader = () => {
  let headers = ['Categories', 'Topics'];
  let renderHeaders = () => headers.map(name => <li key={name}>{name}</li>)
  return (
    <ul className='lsp-headers' aria-label='topics headers'>
      {renderHeaders()}
    </ul>
  )
}