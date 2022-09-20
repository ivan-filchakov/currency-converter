import React from "react"
import { BsCurrencyExchange } from "react-icons/bs"
import StatusBar from "../statusBar"
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
        <StatusBar from="USD" to="UAH" />
        <StatusBar from="EUR" to="UAH" />
      </div>
    </header>
  )
}

export default Header
