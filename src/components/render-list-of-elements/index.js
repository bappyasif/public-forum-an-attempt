import React from "react"

export let RenderListOfElements = ({list, wrapperClassName, elementClassName}) => {
    let listElementNames = () => list.map(name => <RenderListItem key={name} name={name} itemClassName={elementClassName} />)
    return (
        <ul className={wrapperClassName}>
            {listElementNames()}
        </ul>
    )
}

let RenderListItem = ({name, itemClassName}) => {
    return <li aria-label={name} className={itemClassName}>{itemClassName.includes('number') !== true ? <a href='http://localhost:3000/'>{name}</a> : name}</li>
}