import { CELSIUS_ENTERED } from '..'

function celsiusEntered (celsiusInput) {
  return {
    type: CELSIUS_ENTERED,
    payload: celsiusInput
  }
}

export { celsiusEntered }
