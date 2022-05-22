import React from 'react'
import { useParams } from 'react-router-dom'

function NestedRouteCompTest() {
    let params = useParams()
    console.log(params, 'params')
  return (
    <div>NestedRouteCompTest {params.testId || params.topicId}</div>
  )
}

export default NestedRouteCompTest