import React, { useEffect } from 'react'

export function useOnClickOutside(ref, handler) {
    useEffect(() => {
        let listener = event => {
            if (!ref.current || ref.current.contains(event.target)) return
            handler(event)
        }

        document.addEventListener('mousedown', listener)

        return () => document.removeEventListener('mousedown', listener)

    }, [ref, handler])
}

export let handleUpdateStatesValue = (statesUpdater, stateName, newData) => {
    statesUpdater(prevStates => ({...prevStates, [stateName]: newData}))
}

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