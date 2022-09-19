import React from "react"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import PropTypes from "prop-types"
import { currencyRates, listenCurrencyRates } from "../modules/currencyRatesModule"

export const store = configureStore({
  reducer: {
    currencyRates: currencyRates.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend([
    listenCurrencyRates.middleware,
  ]),
  preloadedState: {},
})

export default function Store(props) {
  const { children } = props
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
