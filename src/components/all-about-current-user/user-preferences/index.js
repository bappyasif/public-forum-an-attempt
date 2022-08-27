import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AccountProfile from './account-profile'

function UserPreferences() {
  let [initTabname, setInitTabname] = useState(null)
  let [tabChanged, setTabChanged] = useState(null)
  let params = useParams()

  console.log(initTabname, params, "params", tabChanged)

  useEffect(() => setInitTabname("account"), [])

  // useEffect(() => setTabname(params.tabName), [params.tabName])

  useEffect(() => {
    setTabChanged(params.tabName)
    setInitTabname(null)
  }, [params.tabName])

  return (
    <div role={'tabpanel'}>
      {/* <AccountProfile /> */}
      {/* { initTabname === "account" ? <AccountProfile /> : ''} */}
      { initTabname === "account" || params.tabName === undefined ? <AccountProfile /> : ''}
      { (tabChanged === "account" ) ? <AccountProfile /> : ''}
    </div>
  )
}

export default UserPreferences