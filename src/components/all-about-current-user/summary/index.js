import React, { useState } from 'react'
import AllStats from '../all-stats'
import CollapsedInfo from '../collapsed-info'
import ExtendedView from '../collapsed-info/extended-view'
import PrimaryNavigation from '../primary-navigation'
import RepliesAndTopicsSections from '../replies-and-topics-sections'
import TopLinksAndMostRepliedTo from '../top-links'

function SummaryDetails() {
  let [expanded, setExpanded] = useState(false)
  let handleToggle = () => setExpanded(!expanded)

  return (
    <div style={{ width: 'min-content', margin: 'auto' }}>
      <CollapsedInfo expanded={expanded} handleToggle={handleToggle} />
      {expanded ? <ExtendedView /> : null}
      <PrimaryNavigation />
      <AllStats />
      Summary Details
      <RepliesAndTopicsSections />
      <TopLinksAndMostRepliedTo />
    </div>
  )
}

export default SummaryDetails