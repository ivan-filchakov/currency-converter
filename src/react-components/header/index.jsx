import React from "react"
import { BsCurrencyExchange } from "react-icons/bs"
import "./style.css"

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <BsCurrencyExchange
          color="#FFD400"
          size="32px"
        />
        <span>
          Currency converter
        </span>
      </div>
      <div className="header__status">
        curr status
      </div>
    </header>
  )
}

export default Header
