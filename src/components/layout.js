/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar transparent />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
