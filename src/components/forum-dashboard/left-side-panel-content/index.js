import React, { useContext } from 'react'
import { UserContext } from '../../../App'
import './styles.css'

export function DashboardPanelLeftSide() {
  let allStates = useContext(UserContext)
  return (
    <aside className='left-side-panel-container'>
      <LeftSideGridHeader />
      <LeftSideGridTopics list={allStates.categoriesInfo} />
    </aside>
  )
}

let LeftSideGridTopics = ({list}) => {
  let renderTopics = () => list?.map(item => <RenderTopic key={item.name} topicItem={item} />)
  return (
    <ul className='lsp-topic-list'>
      {renderTopics()}
    </ul>
  )
}

let RenderTopic = ({topicItem}) => {
  let {name, topics} = {...topicItem}
  return (
    <li>
      <p tabIndex={'0'}>{name}</p>
      <p tabIndex={'0'}>{topics}</p>
    </li>
  )
}

let LeftSideGridHeader = () => {
  let headers = ['Categories', 'Topics'];
  let renderHeaders = () => headers.map(name => <li key={name}>{name}</li>)
  return (
    <ul className='lsp-headers'>
      {renderHeaders()}
    </ul>
  )
}