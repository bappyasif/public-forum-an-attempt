import React from "react"

export let RenderListOfElements = ({list, wrapperClassName, elementClassName}) => {
    let listElementNames = () => list.map(name => <RenderListItem key={name} name={name} itemClassName={elementClassName} />)
    return (
        <div className={wrapperClassName}>
            {listElementNames()}
        </div>
    )
}

let RenderListItem = ({name, itemClassName}) => {
    return <div className={itemClassName}>{name}</div>
}