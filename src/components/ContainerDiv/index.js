import styled from 'styled-components'
import React from 'react'
import { connect } from 'react-redux'

import { getFahrenheit, getCelsius } from '../../utilities'

import {
  getCelsiusInput,
  celsiusEntered,
  getFahrenheitInput,
  fahrenheitEntered
} from '../../state'

const StyledContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: auto;
  font-size: 18px;
`
StyledContainer.displayName = 'StyledContainer'

const StyledInput = styled.input`
  padding: 10px;
  font-size: 18px;
  transition: all .2s ease;
  display: block;
  width: 100%;
`
StyledInput.displayName = 'StyledInput'

const StyledFehrenheitInput = StyledInput.extend`

`
StyledFehrenheitInput.displayName = 'StyledFehrenheitInput'

const StyledCelsiusInput = StyledInput.extend`

`
StyledCelsiusInput.displayName = 'StyledCelsiusInput'

const StyledEquals = styled.p`
  font-size: 100px;
`
StyledEquals.displayName = 'StyledEquals'

export function ContainerDiv ({
  celsius,
  enterCelsius,
  fahrenheit,
  enterFahrenheit
}) {
  return (
    <div>
      <StyledContainer>
        <h3>Fahrenheit:</h3>
        <StyledFehrenheitInput
          placeholder={
            getFahrenheit(celsius) === 'Please enter a number'
              ? 'Input Fahrenheit'
              : getFahrenheit(celsius)
          }
          onChange={e => enterFahrenheit(e.target.value)}
        />
        <StyledEquals>=</StyledEquals>
        <h3>Celsius:</h3>
        <StyledCelsiusInput
          placeholder={
            getCelsius(fahrenheit) === 'Please enter a number'
              ? 'Input Celsius'
              : getCelsius(fahrenheit)
          }
          onChange={e => enterCelsius(e.target.value)}
        />
      </StyledContainer>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    celsius: getCelsiusInput(state),
    fahrenheit: getFahrenheitInput(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    enterCelsius (temperature) {
      dispatch(celsiusEntered(temperature))
    },
    enterFahrenheit (temperature) {
      dispatch(fahrenheitEntered(temperature))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerDiv)
