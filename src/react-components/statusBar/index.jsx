import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import useRatesData from "../../store/store.selectors"
import "./style.css"

function StatusBar({ from, to }) {
  const { rates } = useRatesData()

  const [displayValue, setDisplayValue] = useState(0)
  useEffect(() => {
    if (rates) {
      const currentRate = rates[to] / rates[from]
      setDisplayValue(Number(currentRate.toFixed(2)))
    }
  }, [rates])

  return displayValue && (
    <div className="statusBar">
      <span className="statusBar__text">
        {from}
        :
      </span>
      <span className="statusBar__value">
        {displayValue}
      </span>
    </div>
  )
}

export default StatusBar
StatusBar.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
