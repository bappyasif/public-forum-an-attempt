import React, { useState } from 'react'
import AllStats from '../all-stats'
import CollapsedInfo from '../collapsed-info'
import ExtendedView from '../collapsed-info/extended-view'
import PrimaryNavigation from '../primary-navigation'

function SummaryDetails() {
  let [expanded, setExpanded] = useState(false)
  let handleToggle = () => setExpanded(!expanded)

  return (
    <div style={{ width: 'fit-content', margin: 'auto' }}>
      <CollapsedInfo expanded={expanded} handleToggle={handleToggle} />
      {expanded ? <ExtendedView /> : null}
      <PrimaryNavigation />
      <AllStats />
      Summary Details
    </div>
  )
}

export default SummaryDetails