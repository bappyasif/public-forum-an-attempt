import React, { useState } from 'react'
import AllStats from '../all-stats'
import CollapsedInfo from '../collapsed-info'
import ExtendedView from '../collapsed-info/extended-view'
import MostLikedTopicsDetails from '../liked-details'
import PrimaryNavigation from '../primary-navigation'
import RepliesAndTopicsSections from '../replies-and-topics-sections'
import TopLinksAndMostRepliedTo from '../top-links'

function SummaryDetails() {
  let [expanded, setExpanded] = useState(false)
  let handleToggle = () => setExpanded(!expanded)

  return (
    <div style={{ width: '69vw', margin: 'auto' }}>
      <CollapsedInfo expanded={expanded} handleToggle={handleToggle} />
      {expanded ? <ExtendedView /> : null}
      <PrimaryNavigation />
      <AllStats />
      Summary Details
      <RepliesAndTopicsSections />
      <TopLinksAndMostRepliedTo />
      Liked Details
      <MostLikedTopicsDetails />
    </div>
  )
}

export default SummaryDetails