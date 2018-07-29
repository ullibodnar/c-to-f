import { isUndefined } from 'ramda-adjunct'

export default function getFahrenheit (temperature) {
  temperature = parseFloat(temperature)
  console.log(`Temp: ${typeof temperature}`)
  return isUndefined(temperature) || isNaN(temperature) || ''
    ? 'Please enter a number'
    : `${Math.floor(temperature * (9 / 5) + 32)} degrees Fahrenheit`
}
