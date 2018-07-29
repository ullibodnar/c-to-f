import CELSIUS_ENTERED from '..'
import celsiusEntered from '.'

describe('state:actions', () => {
  describe('actions:celsiusEntered', () => {
    it('produces the correct action for typing in a temperature in celsius input box', () => {
      const celsiusInput = 0

      expect(celsiusEntered(celsiusInput)).toMatchObject({
        type: CELSIUS_ENTERED,
        payload: 0
      })
    })
  })
})
