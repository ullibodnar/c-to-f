import { CELSIUS_ENTERED } from '..'

const initialState = {
  celsius: '',
  fahrenheit: undefined
}

function rootReducer (state = initialState, { payload = {}, type }) {
  switch (type) {
    case CELSIUS_ENTERED:
      console.log(payload)
      return {
        ...state,
        celsius: payload
      }

    default:
      return state
  }
}

export { initialState, rootReducer }
