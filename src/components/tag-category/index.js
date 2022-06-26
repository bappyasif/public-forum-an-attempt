import React from 'react'
import TopicTagCategoryTable from '../topic-tag-category-body';
import TopicTagCategoryHeader from '../topic-tag-category-header';

function TagCategory() {
  return (
    <section aria-label='tag-category'>
      <TopicTagCategoryHeader categoryName={'HTML-CSS'} />
      <TopicTagCategoryTable />
    </section>
  )
}


let categoriesList = ['HTML/CSS', 'JS']

export default TagCategory