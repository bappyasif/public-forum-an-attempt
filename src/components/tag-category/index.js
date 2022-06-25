import React from 'react'
import TopicTagCategoryHeader from '../topic-tag-category-header';

function TagCategory() {
  return (
    <section aria-label='tag-category'>
      <TopicTagCategoryHeader categoryName={'HTML-CSS'} />
    </section>
  )
}


let categoriesList = ['HTML/CSS', 'JS']

export default TagCategory