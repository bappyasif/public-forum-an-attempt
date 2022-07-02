import React from 'react'
import TagCategory from '../../tag-category'

function TagRoute({setAllStates}) {
  return (
    <main aria-label='category topic tag route'>
        <TagCategory setAllStates={setAllStates} />
    </main>
  )
}

export default TagRoute