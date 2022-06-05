import { useEffect } from "react"

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

export function useOnHoverOutside(ref, handler) {
    useEffect(() => {
        let listener = event => {
            if (!ref.current || ref.current.contains(event.target)) return
            handler(event)
            // console.log('peformed!!')
        }

        document.addEventListener('mouseleave', listener)

        return () => document.removeEventListener('mouseleave', listener)

    }, [ref, handler])
}