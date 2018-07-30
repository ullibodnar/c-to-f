import { isUndefined } from 'ramda-adjunct'

export default function getCelsius (temperature) {
  temperature = parseFloat(temperature)
  console.log(`Temp: ${typeof temperature}`)
  return isUndefined(temperature) || isNaN(temperature) || ''
    ? 'Please enter a number'
    : `${Math.floor((temperature - 32) * 5 / 9)}° Celsius`
}
