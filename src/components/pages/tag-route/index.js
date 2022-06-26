import React from 'react'
import TagCategory from '../../tag-category'

function TagRoute({setAllStates}) {
  return (
    <section aria-label='category topic tag route'>
        <TagCategory setAllStates={setAllStates} />
    </section>
  )
}

export default TagRoute