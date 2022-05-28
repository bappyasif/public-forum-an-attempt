import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import DashboardContainer from './forum-dashboard/dashboard-container';
import FooterContents from './forum-dashboard/footer-content';
import HeaderUI from './header-section'
import HeroContent from './hero-content'

export let UserContext = createContext();

export default function ComponentsContainer() {
  let [allStates, setAllStates] = useState({ categories: [] })

  useEffect(() => {
    handleUpdateStatesValue(setAllStates, 'categoriesInfo', [{ name: 'Top', topics: 1234 }, { name: "Latest", topics: 5678 }, { name: "Users", topics: 9012 }, { name: "Badges", topics: 3456 }]);
    handleUpdateStatesValue(setAllStates, 'fakeTopics', fakeTopics)
  }, [])

  useEffect(() => {
    Object.keys(allStates).length === 1 && setAllStates(prevStates => ({ ...prevStates, headerLables: ['Categories', 'Top', "Latest", "FAQ"] }))
  }, [allStates])

  console.log(allStates, 'allStates')

  return (
    <UserContext.Provider value={allStates}>
      <main className='components-container'>
        <HeaderUI />
        <HeroContent />
        {/* temporary placement of topic */}
        {/* <UserTopic /> */}
        <DashboardContainer setAllStates={setAllStates} />
        <FooterContents />
        <Outlet />
      </main>
    </UserContext.Provider>
  )
}

export let handleUpdateStatesValue = (statesUpdater, stateName, newData) => {
  statesUpdater(prevStates => ({ ...prevStates, [stateName]: newData }))
}

export let fakeReplies = [
  {
    id: '01',
    name: "some user",
    picUrl: "https://unsplash.it/47",
    replyText: "this is a demo reply text on this fake topic, if found helpful feel free to use it as a solution or give it an appropriate reaction",
    postedTime: "44m"
  },
  {
    id: '02',
    name: "another user",
    picUrl: "https://unsplash.it/47",
    replyText: "this is a demo reply text on this fake topic, if found helpful feel free to use it as a solution or give it an appropriate reaction",
    postedTime: "42m"
  },
]

let fakeTopics = [
  {
    id: '1',
    text: 'currently need help with this question related to JS',
    tag: 'JS',
    datePosted: '22',
    liveDuration: '15 min'
  },
  {
    id: '2',
    text: 'currently need help with this question related to HTML',
    tag: 'HTML',
    datePosted: '22',
    liveDuration: '15 hr'
  },
  {
    id: '3',
    text: 'currently need help with this question related to CSS',
    tag: 'CSS',
    datePosted: '22',
    liveDuration: '15 sec'
  },
  {
    id: '4',
    text: 'currently need help with this question related to React',
    tag: 'HTML',
    datePosted: '22',
    liveDuration: '51 min'
  },
  {
    id: '5',
    text: 'currently need help with this question related to General criteria',
    tag: 'HTML',
    datePosted: '22',
    liveDuration: '1 hr'
  }
]