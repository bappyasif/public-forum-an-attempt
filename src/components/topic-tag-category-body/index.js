import React from 'react'
import './styles.css'

function TopicTagCategoryTable() {
    return (
        <table aria-label='topic tag category table' className='ttct-table'>
            <TableHead />
            <TableBody />
        </table>
    )
}

let TableBody = () => {
    let tableRows = () => demoTopics.map((item, idx) => <TableRow key={idx} items={item} idx={idx} />)
    return (
        <tbody>
            {tableRows()}
        </tbody>
    )
}

let TableRow = ({ items, idx }) => {
    let { topic, users, replies, views, activity } = { ...items }
    // let renderDatas = () => itemsArray[0].map(item => <td>{item}</td>)
    // let renderDatas = () => itemsArray.map((item, _) => item.map(elem => <td key={_}>{elem}</td>))
    // console.log(itemsArray, 'itemsArray')
    let renderEngagedUsersPhotos = () => users?.map(imgUrl => <a  key={imgUrl}><img src={imgUrl} alt='user who took part in it' /></a>)
    return (
        <tr className='table-data-row' aria-label={idx}>
            {/* {renderDatas()} */}
            <td><h2>{topic}</h2></td>
            {/* <th scope='row'><h2>{topic}</h2></th> */}
            <td className='users-photos'>{renderEngagedUsersPhotos()}</td>
            <td>{replies}</td>
            <td>{views}</td>
            <td>{activity}</td>
        </tr>
    )
}

// let TableData = ({topic, users, replies, views, activity}) => {
//     return (
//         <td>

//         </td>
//     )
// }

let TableHead = () => {
    let headers = ['Topic', '_', 'Replies', 'Views', 'Activity']
    // let renderHeaders = () => <tr>{headers.map(name => <th key={name}>{name !== '_' ? name : ' '}</th>)}</tr>
    let renderHeaders = () => <tr>{headers.map(name => <th key={name} scope="col"><span id={name === '_' ? 'hide-me' : ''}>{name}</span></th>)}</tr>
    return (
        <thead aria-label='table headers'>
            {renderHeaders()}
        </thead>
    )
}

let demoTopics = [
    {
        topic: 'some interesting topic was created by na user and needs your help to remedy that',
        users: ['https://www.unsplash.it/29/29', 'https://www.unsplash.it/29/29', 'https://www.unsplash.it/29/29', 'https://www.unsplash.it/29/29'],
        replies: 4,
        views: 4,
        activity: 4
    },
    {
        topic: 'some interesting topic was created by na user and needs your help to remedy that',
        users: ['https://www.unsplash.it/29/29', 'https://www.unsplash.it/29/29'],
        replies: 2,
        views: 2,
        activity: 2
    },
    {
        topic: 'some interesting topic was created by na user and needs your help to remedy that',
        users: ['https://www.unsplash.it/29/29', 'https://www.unsplash.it/29/29', 'https://www.unsplash.it/29/29', 'https://www.unsplash.it/29/29'],
        replies: 24,
        views: 24,
        activity: 24
    },
    {
        topic: 'some interesting topic was created by na user and needs your help to remedy that',
        users: ['https://www.unsplash.it/29/29', 'https://www.unsplash.it/29/29'],
        replies: 44,
        views: 44,
        activity: 44
    }
]

export default TopicTagCategoryTable