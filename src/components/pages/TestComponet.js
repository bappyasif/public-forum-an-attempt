import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { baseUri } from '../../App'

function TestComponent() {
    return (
        <nav>
            {[1, 2, 3, 4].map(n => (
                <Link key={n} to={`${baseUri}/test/${n}`}>{`test: ${n}`} | </Link>
            ))}
            <Outlet />
        </nav>
    )
}

export default TestComponent