import { CELSIUS_ENTERED, FAHRENHEIT_ENTERED } from '..'

const initialState = {
  celsius: '',
  fahrenheit: ''
}

function rootReducer (state = initialState, { payload = {}, type }) {
  switch (type) {
    case CELSIUS_ENTERED:
      console.log(payload)
      return {
        ...state,
        fahrenheit: '',
        celsius: payload
      }
    case FAHRENHEIT_ENTERED:
      return {
        ...state,
        celsius: '',
        fahrenheit: payload
      }
    default:
      return state
  }
}

export { initialState, rootReducer }
