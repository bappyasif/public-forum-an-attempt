import { faCheckSquare, faHeart, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles.css'

function LeftSideNavigationPanel() {
    let renderNavs = () => navItems.map(item => <RenderNavItem key={item.name} item={item} />)
  return (
    <nav className='side-nav'>
        <ul className='nav-list'>
            {renderNavs()}
        </ul>
    </nav>
  )
}

let RenderNavItem = ({item}) => {
    let {name, icon, count} = {...item}

    return (
        <li className='nav-elem'>
            {icon && <FontAwesomeIcon icon={icon} />} <span>{name}</span> { count && <span>{count}</span>}
        </li>
    )
}

let navItems = [
    {
        name: "All"
    },
    {
        name: "Topics"
    },
    {
        name: "Replies"
    },
    {
        name: "Read"
    },
    {
        name: "Drafts",
        count: 4
    },
    {
        name: "Likes"
    },
    {
        name: "Bookmarks"
    },
    {
        name: "Reactions",
        icon: faSmile,
    },
    {
        name: "Solved",
        icon: faCheckSquare,
    },
    {
        name: "Votes",
        icon: faHeart,
    }
]

export default LeftSideNavigationPanel