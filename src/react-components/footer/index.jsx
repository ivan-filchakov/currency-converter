import React from "react"
import useRatesData from "../../store/store.selectors"
import apiURL from "../../api/api.url"
import "./style.css"

function Footer() {
  const { timestamp } = useRatesData()
  const directLink = apiURL.split("api.").join("")
  return (
    <footer className="footer">
      <span>
        Exchange rates data from:&nbsp;
        <a href={directLink} target="_blank" rel="noopener noreferrer">
          {directLink}
        </a>
      </span>
      <span>
        Timestamp:&nbsp;
        {timestamp}
      </span>
    </footer>
  )
}

export default Footer
