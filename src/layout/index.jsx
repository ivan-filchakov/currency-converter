import React from "react"
import PropTypes from "prop-types"
import Header from "../react-components/header"
import Footer from "../react-components/footer"
import "./style.css"

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__content">
        {children}
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
Layout.propTypes = {
  /**
   * Content to put inside block.
   * Could be any react node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
