import React, { useState } from 'react'
import AllStats from '../../all-about-current-user/all-stats'
import CollapsedInfo from '../../all-about-current-user/collapsed-info'
import ExtendedView from '../../all-about-current-user/collapsed-info/extended-view'
import MostLikedTopicsDetails from '../../all-about-current-user/liked-details'
import PrimaryNavigation from '../../all-about-current-user/primary-navigation'
import RepliesAndTopicsSections from '../../all-about-current-user/replies-and-topics-sections'
import TopLinksAndMostRepliedTo from '../../all-about-current-user/top-links'
import TopSubforums from '../../all-about-current-user/top-subforums'
import HeaderUI from '../../header-section'

function SummaryDetails({setAllStates}) {
  let [expanded, setExpanded] = useState(false)
  let handleToggle = () => setExpanded(!expanded)

  return (
    <main>
      <HeaderUI setAllStates={setAllStates} />
      <div style={{ width: '69vw', margin: '72px auto' }}>
        <CollapsedInfo expanded={expanded} handleToggle={handleToggle} />
        {expanded ? <ExtendedView /> : null}
        <PrimaryNavigation />
        <AllStats />

        {/* Summary Details */}
        <RepliesAndTopicsSections />
        <TopLinksAndMostRepliedTo />

        {/* Liked Details */}
        <MostLikedTopicsDetails />

        {/* Top Subforums */}
        <TopSubforums />
      </div>
    </main>
  )
}

export default SummaryDetails