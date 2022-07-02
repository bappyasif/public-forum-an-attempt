import React, { useState } from 'react'
import TopicTagCategoryTable from '../topic-tag-category-body';
import TopicTagCategoryHeader from '../topic-tag-category-header';

function TagCategory({setAllStates}) {
  let [categoryName, setCategoryName] = useState('HTML-CSS')
  let updateCategoryName = newValue => setCategoryName(newValue)

  return (
    <section aria-label='tag-category' style={{position: 'relative'}}>
      <TopicTagCategoryHeader categoryName={categoryName} setAllStates={setAllStates} updateCategory={updateCategoryName} />
      <TopicTagCategoryTable />
    </section>
  )
}


// let categoriesList = ['HTML/CSS', 'JS']

export default TagCategory