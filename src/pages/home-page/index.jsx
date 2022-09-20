import React from "react"
import Layout from "../../layout"
import Converter from "../../react-components/converter"
import "./style.css"

function HomePage() {
  return (
    <Layout>
      <div className="homePage">
        <div className="homePage__content">
          <Converter />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
