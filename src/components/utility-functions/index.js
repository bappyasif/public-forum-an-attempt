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

export let handleAllStatesUpdate = (state, updater, newVal, name) => {
    let newItems = state.map(item => item.name === name ? { ...item, attr: newVal } : { ...item })
    updater(newItems)
}