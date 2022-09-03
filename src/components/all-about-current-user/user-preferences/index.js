import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AccountProfile from './account-profile'
import AccountSecurity from './account-security'
import UserProfile from './user-profle'

function UserPreferences() {
  let [initTabname, setInitTabname] = useState(null)
  let [tabChanged, setTabChanged] = useState(null)
  let params = useParams()

  console.log(initTabname, params, "params", tabChanged)

  useEffect(() => setInitTabname("account"), [])

  // useEffect(() => setTabname(params.tabName), [params.tabName])

  console.log(params, "<<params>>")

  useEffect(() => {
    setTabChanged(params.tabName)
    setInitTabname(null)
  }, [params.tabName])

  useEffect (() => {
    let brandEl = document.querySelector("span.tox-statusbar__branding svg");
    brandEl?.remove()
  }, [tabChanged])

  return (
    <div role={'tabpanel'}>
      {/* <AccountProfile /> */}
      {/* { initTabname === "account" ? <AccountProfile /> : ''} */}
      { initTabname === "account" || params.tabName === undefined ? <AccountProfile /> : ''}
      { (tabChanged === "account" ) ? <AccountProfile /> : ''}

      { (tabChanged === "security" ) ? <AccountSecurity /> : ''}

      { (tabChanged === "profile" ) ? <UserProfile /> : ''}
    </div>
  )
}

export default UserPreferences