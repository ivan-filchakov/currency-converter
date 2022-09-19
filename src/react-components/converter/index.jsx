import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import CurrencySelect from "../currencySelect"
import useRatesData from "../../store/store.selectors"
import "./style.css"

function Converter() {
  const ratesData = useRatesData()
  const [converterState, setConverterState] = useState(null)

  const dispatch = useDispatch()
  useEffect(() => {
    if (!ratesData.rates) dispatch({ type: "currencyRates/request" })
  }, [ratesData.rates])

  useEffect(() => setConverterState({
    currencies: ratesData.formatedSymbols,
    base: ratesData.base,
    rates: ratesData.rates,
    currencyA: { selected: null, amount: 0 },
    currencyB: { selected: null, amount: 0 },

    // ======= WITH DEFAULT VALUES =========
    // currencyB: {
    //   default: ratesData.formatedSymbols?.find(
    //     (el) => el.value === defaultB,
    //   ),
    //   rate: ratesData.rates?.[defaultB],
    //   amount: 0,
    // },
    // ======= WITH DEFAULT VALUES =========
  }), [ratesData.rates])

  // console.log(converterState)

  const handleCurrencyAChange = (el) => {
    setConverterState({
      ...converterState,
      currencyA: {
        selected: el.selectedCurrency,
        amount: el.amount,
      },
      currencyB: {
        ...converterState.currencyB,
        amount: el.amount * 10,
      },
    })
  }

  const handleCurrencyBChange = (el) => {
    setConverterState({
      ...converterState,
      currencyB: {
        selected: el.selectedCurrency,
        amount: el.amount,
      },
    })
  }

  return (
    ratesData.rates
    && (
      <div className="converter">
        <CurrencySelect
          currencies={converterState.currencies}
          selectedCurrency={converterState.currencyA.selected}
          amount={converterState.currencyA.amount}
          onChange={handleCurrencyAChange} // eslint-disable-line react/jsx-no-bind
        />
        <CurrencySelect
          currencies={converterState.currencies}
          selectedCurrency={converterState.currencyB.selectedCurrency}
          amount={converterState.currencyB.amount}
          onChange={handleCurrencyBChange} // eslint-disable-line react/jsx-no-bind
        />
        <h4 style={{ textAlign: "center" }}>CONVERTER STATE:</h4>
        <span>
          <strong>Currency A:</strong>
          <br />
          {JSON.stringify(converterState?.currencyA)}
        </span>
        <span>
          <strong>Currency B:</strong>
          <br />
          {JSON.stringify(converterState?.currencyB)}
        </span>
        <span>
          typeof amount A: ===&nbsp;
          {JSON.stringify(typeof converterState?.currencyA.amount)}
        </span>
        <span>
          typeof amount B: ===&nbsp;
          {JSON.stringify(typeof converterState?.currencyA.amount)}
        </span>
      </div>
    )
  )
}

export default Converter
