import React from 'react'
import TopicTagCategoryTable from '../topic-tag-category-body';
import TopicTagCategoryHeader from '../topic-tag-category-header';

function TagCategory({setAllStates}) {
  return (
    <section aria-label='tag-category' style={{position: 'relative'}}>
      <TopicTagCategoryHeader categoryName={'HTML-CSS'} setAllStates={setAllStates} />
      <TopicTagCategoryTable />
    </section>
  )
}


// let categoriesList = ['HTML/CSS', 'JS']

export default TagCategory