import React, { useContext, useState } from 'react'
import { UserContext } from '../../App';
import TopicTagCategoryTable from '../topic-tag-category-body';
import TopicTagCategoryHeader from '../topic-tag-category-header';

function TagCategory({setAllStates}) {
  // let [categoryName, setCategoryName] = useState('HTML-CSS')
  // let updateCategoryName = newValue => setCategoryName(newValue)
  let allStates = useContext(UserContext);

  return (
    <section aria-label='tag-category' style={{position: 'relative'}}>
      {/* <TopicTagCategoryHeader categoryName={categoryName} setAllStates={setAllStates} updateCategory={updateCategoryName} /> */}
      <TopicTagCategoryHeader categoryName={allStates.tagCategoryName || 'HTML-CSS'} setAllStates={setAllStates} />
      <TopicTagCategoryTable />
    </section>
  )
}


// let categoriesList = ['HTML/CSS', 'JS']

export default TagCategory