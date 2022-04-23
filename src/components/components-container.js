import React, { createContext, useEffect, useState } from 'react'
import DashboardContainer from './forum-dashboard/dashboard-container';
import HeaderUI from './header-section/ui'
import HeroContent from './hero-content'
import { handleUpdateStatesValue } from './utility-functions'

export let UserContext = createContext();

export default function ComponentsContainer() {
  let [allStates, setAllStates] = useState({categories: []})

  useEffect(() => {
    handleUpdateStatesValue(setAllStates, 'categories', ['Top', "Latest", "Users", "Badges"])
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