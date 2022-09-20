/* eslint-disable no-param-reassign */
import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit"
import { getLatestRates, getSymbols } from "../../api/getRatesInfo"

export const currencyRates = createSlice({
  initialState: {
    requesting: false,
    requestError: null,
    data: null,
  },
  name: "currencyRates",
  reducers: {
    request(state) {
      state.requesting = true
    },
    requestSuccess(state, action) {
      state.requesting = false
      state.requestError = null
      state.data = action.payload
    },
    requestError(state, action) {
      state.requesting = false
      state.requestError = action.payload
      state.data = null
    },
  },
})

export const listenCurrencyRates = createListenerMiddleware()
listenCurrencyRates.startListening({
  actionCreator: currencyRates.actions.request,
  effect: async (action, listenerApi) => {
    try {
      const { base, rates } = await getLatestRates()
      const { symbols } = await getSymbols()
      /**
       * reformatting data from api so it fits into components
       */
      const formatedSymbols = Object.values(symbols).map((el) => {
        el.value = el.code
        el.label = `${el.code} - ${el.description}`
        delete el.code
        delete el.description
        return el
      })
      const result = {
        rates,
        formatedSymbols,
        base: symbols[base],
      }
      listenerApi.dispatch(currencyRates.actions.requestSuccess(result))
    } catch (e) {
      listenerApi.dispatch(currencyRates.actions.requestError(e))
    }
  },
})
