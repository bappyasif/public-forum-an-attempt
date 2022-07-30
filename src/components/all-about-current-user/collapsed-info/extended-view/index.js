import React from 'react'
import './styles.css'

function ExtendedView() {
    let renderDetails = () => viewDeatils.map(item => <ShowDetail key={item.name} item={item} />)
    return (
        <dl className='render-details'>
            {renderDetails()}
        </dl>
    )
}

let ShowDetail = ({ item }) => {
    let { name, value } = { ...item }
    return (
        <div className='show-detail'>
            <dt>{name}</dt>
            <dd>{value}</dd>
        </div>
    )
}

let viewDeatils = [
    { name: 'Joined', value: 'feb 20 2017' }, { name: 'Last post', value: '4 hours' },
    { name: 'Seen', value: '2 hours' }, { name: 'Views', value: '338' },
    { name: 'Trust level', value: 'member' }, { name: 'Email', value: 'ab@icloud.com' }
]

export default ExtendedView