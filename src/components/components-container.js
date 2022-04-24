import React, { createContext, useEffect, useState } from 'react'
import DashboardContainer from './forum-dashboard/dashboard-container';
import HeaderUI from './header-section/ui'
import HeroContent from './hero-content'
import { handleUpdateStatesValue } from './utility-functions'

export let UserContext = createContext();

export default function ComponentsContainer() {
  let [allStates, setAllStates] = useState({categories: []})

  useEffect(() => {
    handleUpdateStatesValue(setAllStates, 'categories', ['Top', "Latest", "Users", "Badges"]);
    handleUpdateStatesValue(setAllStates, 'fakeTopics', fakeTopics)
  }, [])

  useEffect(() => {
    Object.keys(allStates).length === 1 && setAllStates(prevStates => ({...prevStates, headerLables: ['Categories', 'Top', "Latest", "FAQ"]}))
  }, [allStates])

  console.log(allStates, 'allStates')

  return (
    <UserContext.Provider value={allStates}>
      <div className='components-container'>
        <HeaderUI />
        <HeroContent />
        <DashboardContainer />
      </div>
    </UserContext.Provider>
  )
}

let fakeTopics = [
  {
      text: 'currently need help with this question related to JS',
      tag: 'JS',
      datePosted: '22',
      liveDuration: '15 min'
  },
  {
      text: 'currently need help with this question related to HTML',
      tag: 'HTML',
      datePosted: '22',
      liveDuration: '15 hr'
  },
  {
      text: 'currently need help with this question related to CSS',
      tag: 'CSS',
      datePosted: '22',
      liveDuration: '15 sec'
  },
  {
      text: 'currently need help with this question related to React',
      tag: 'HTML',
      datePosted: '22',
      liveDuration: '51 min'
  },
  {
      text: 'currently need help with this question related to General criteria',
      tag: 'HTML',
      datePosted: '22',
      liveDuration: '1 hr'
  }
]