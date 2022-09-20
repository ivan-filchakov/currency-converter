import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Input from "../primitives/input"
import Select from "../primitives/customSelect"
import FlagIcon from "../primitives/flagIcon"
import "./style.css"

function CurrencySelect(
  {
    currencies,
    selectedCurrency,
    defaultCurrency,
    amount,
    onChange,
  },
) {
  const [currencyState, setCurrencyState] = useState({
    selectedCurrency,
    defaultCurrency,
    amount,
  })
  const handleInputChange = (el) => {
    setCurrencyState({ ...currencyState, amount: el, defaultCurrency })
  }
  const handleSelectChange = (el) => {
    setCurrencyState({ ...currencyState, selectedCurrency: el, defaultCurrency })
  }
  useEffect(() => {
    if (typeof onChange === "function") onChange(currencyState)
  }, [currencyState])

  /**
   * sets new amount value if it was changed in parent component
   */
  useEffect(() => setCurrencyState({
    ...currencyState, amount,
  }), [amount])

  const flagId = currencyState.selectedCurrency?.value
    || currencyState.defaultCurrency.value

  return (
    <div className="currencySelect">
      <div className="currencySelect__input">
        <Input
          type="number"
          value={amount}
          onChange={handleInputChange}
          id={`input-default-${defaultCurrency.value}`}
        />
      </div>
      <div className="currencySelect__flag">
        <FlagIcon id={flagId} />
      </div>
      <div className="currencySelect__select">
        <Select
          options={currencies}
          value={currencyState.selectedCurrency || defaultCurrency}
          onChange={handleSelectChange}
          placeholder="Choose currency..."
        />
      </div>
    </div>
  )
}

export default CurrencySelect
CurrencySelect.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  selectedCurrency: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  defaultCurrency: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  amount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}
CurrencySelect.defaultProps = {
  currencies: undefined,
  selectedCurrency: undefined,
  defaultCurrency: undefined,
}
