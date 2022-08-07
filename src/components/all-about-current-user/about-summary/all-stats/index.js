import { faCheckSquare, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles.css'

function AllStats() {
    let renderStats = () => coveredAspects.map(item => <RenderStat key={item.name} item={item} />)
    return (
        <div className='stats-container'>
            <h1>All Stats</h1>
            <ul className='render-stats'>
                {renderStats()}
            </ul>
        </div>
    )
}

let RenderStat = ({ item }) => {
    let { name, value } = { ...item }
    return (
        <li className='stat-content'>
            {/* <p >{name} {item.icon && <span>{<FontAwesomeIcon icon={item.icon} />}</span>} <span>{value}</span></p> */}
            <span>{value}</span>
            {/* {item.icon && <FontAwesomeIcon icon={item.icon} />} */}

            <p>{item.icon && <span>{<FontAwesomeIcon icon={item.icon} />}</span>} {name}</p>
        </li>
    )
}

let coveredAspects = [
    { name: "days visited", value: 42 }, { name: "read time", value: 42 }, { name: "recent read time", value: 42 },
    { name: "topics reviewed", value: 42 }, { name: "posts read", value: 42 }, { name: "given", value: 42, icon: faHeart }, { name: "recieved", value: 42, icon: faHeart },
    { name: "topics created", value: 42 }, { name: "posts created", value: 42 }, { name: "solutions", value: 42, icon: faCheckSquare }
]

export default AllStats