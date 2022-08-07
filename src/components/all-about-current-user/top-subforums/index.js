import React from 'react'
import './styles.css'

function TopSubforums() {

    return (
        <table>
            <caption>TopSubforums</caption>
            <TableHead />
            <TableBody />
        </table>
    )
}

let TableBody = () => {
    let renderRows = () => dataDemo.map(item => <RenderRow key={item.tags} item={item} />)

    return (
        <tbody>
            {renderRows()}
        </tbody>
    )
}

let RenderRow = ({item}) => {
    let {tags, topicsCount, repliesCount} = {...item}

    return (
        <tr>
            <th className='row-header' scope='row'>{tags}</th>
            <td>{topicsCount}</td>
            <td>{repliesCount}</td> 
        </tr>
    )
}

let TableHead = () => {
    return (
        <thead>
            <tr>
                <td></td>
                <th className='col-header'>Topics</th>
                <th className='col-header'>Replies</th>
            </tr>
        </thead>
    )
}

let dataDemo = [
    {
        tags: "HTML-CSS",
        topicsCount: 4,
        repliesCount: 294
    },
    {
        tags: "Javascript",
        topicsCount: 6,
        repliesCount: 294
    },
    {
        tags: "General",
        topicsCount: 4,
        repliesCount: 294
    },
    {
        tags: "Contributors",
        topicsCount: 4,
        repliesCount: 294
    },
    {
        tags: "Project Feedback",
        topicsCount: 2,
        repliesCount: 22
    }
]

export default TopSubforums