import React from 'react'
// import { Link } from "gatsby"
import SideNav from '../components/sidenav'
import '../css/index.css'
import HomePage from '../components/global-account'

export default () => {
  return (
    <div style={{display:"flex"}}>
      <SideNav />
      <HomePage />
    </div>
  )
}
// export default IndexPage
