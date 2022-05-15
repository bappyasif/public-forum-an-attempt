import React, { createContext, useEffect, useState } from 'react'
import DashboardContainer from './forum-dashboard/dashboard-container';
import FooterContents from './forum-dashboard/footer-content';
import HeaderUI from './header-section'
import HeroContent from './hero-content'
import UserTopic from './user-topic';

export let UserContext = createContext();

export default function ComponentsContainer() {
  let [allStates, setAllStates] = useState({categories: []})

  useEffect(() => {
    handleUpdateStatesValue(setAllStates, 'categoriesInfo', [{name: 'Top', topics: 1234}, {name: "Latest", topics: 5678}, {name: "Users", topics: 9012}, {name: "Badges", topics: 3456}]);
    handleUpdateStatesValue(setAllStates, 'fakeTopics', fakeTopics)
  }, [])

  useEffect(() => {
    Object.keys(allStates).length === 1 && setAllStates(prevStates => ({...prevStates, headerLables: ['Categories', 'Top', "Latest", "FAQ"]}))
  }, [allStates])

  console.log(allStates, 'allStates')

  return (
    <UserContext.Provider value={allStates}>
      <main className='components-container'>
        <HeaderUI />
        <HeroContent />
        {/* temporary placement of topic */}
        <UserTopic />
        <DashboardContainer setAllStates={setAllStates} />
        <FooterContents />
      </main>
    </UserContext.Provider>
  )
}

export let handleUpdateStatesValue = (statesUpdater, stateName, newData) => {
  statesUpdater(prevStates => ({...prevStates, [stateName]: newData}))
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