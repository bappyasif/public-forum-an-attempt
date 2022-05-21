import React, { useContext } from 'react'
import { UserContext } from '../../components-container'
import './styles.css'


// export function DashboardPanelLeftSide() {
//   let allStates = useContext(UserContext)
//   return (
//     <aside className='left-side-panel-container'>
//       <table>
//         <caption>List of categories and number of topics currently in it</caption>
//         <TableHeader />
//         <tbody>
//           <RenderListOfTableRowElements list={allStates.categoriesInfo} />
//         </tbody>
//       </table>
//     </aside>
//   )
// }


export function DashboardPanelLeftSide() {
  let allStates = useContext(UserContext)
  return (
    <aside className='left-side-panel-container'>
      <LeftSideGridHeader />
      <LeftSideGridTopics list={allStates.categoriesInfo} />
      {/* <table>
        <caption>List of categories and number of topics currently in it</caption>
        <TableHeader />
        <tbody>
          <RenderListOfTableRowElements list={allStates.categoriesInfo} />
        </tbody>
      </table> */}
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
      <p>{name}</p>
      <p>{topics}</p>
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

let TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope='col' colSpan={2}>Categories</th>
        <th scope='col'>Topics</th>
      </tr>
    </thead>
  )
}

let RenderListOfTableRowElements = ({ list, elementClassName }) => {
  let listTableDatas = () => list && list.map(item => <RenderTableRowData key={item.name} item={item} itemClassName={elementClassName} />)
  return (
    listTableDatas()
  )
}

let RenderTableRowData = ({ item }) => {
  let tableDatas = []

  for (let key in item) {
    tableDatas.push(item[key])
  }

  let renderAllTableDatas = () => tableDatas.map((item, idx) => <td key={idx} colSpan={/[A-Z]+/.test(item) ? 2 : 1}>{item}</td>)

  return <tr>{renderAllTableDatas()}</tr>
}