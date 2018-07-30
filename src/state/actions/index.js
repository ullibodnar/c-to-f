import { CELSIUS_ENTERED, FAHRENHEIT_ENTERED } from '..'

function celsiusEntered (celsiusInput) {
  return {
    type: CELSIUS_ENTERED,
    payload: celsiusInput
  }
}

function fahrenheitEntered (fahrenheitInput) {
  return {
    type: FAHRENHEIT_ENTERED,
    payload: fahrenheitInput
  }
}

export { celsiusEntered, fahrenheitEntered }
