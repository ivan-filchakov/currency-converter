import React from "react"
import { BsGithub } from "react-icons/bs"
import useRatesData from "../../store/store.selectors"
import apiURL from "../../api/api.url"
import "./style.css"

function Footer() {
  const { timestamp } = useRatesData()
  const directLink = apiURL.split("api.").join("")
  return (
    <footer className="footer">
      <div className="footer__info">
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
      </div>
      <div className="footer__button">
        <a
          href="https://github.com/ivan-filchakov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub size="32px" color="#2c2c2c" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
