import React from 'react'
import CollapsedInfo from '../collapsed-info'
import PrimaryNavigation from '../primary-navigation'

function SummaryDetails() {
  return (
    <div style={{width: 'fit-content', margin: 'auto'}}>
        <CollapsedInfo />
        <PrimaryNavigation />
        Summary Details
    </div>
  )
}

export default SummaryDetails