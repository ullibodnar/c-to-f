import styled from 'styled-components'
import React from 'react'
import { connect } from 'react-redux'

import { getFahrenheit } from '../../utilities'

import { getCelsiusInput, celsiusEntered } from '../../state'

const StyledContainer = styled.div`
  width: 40%;
  height: 400px;
  margin: auto;
  display: inline-block;
  padding: 10px 10px;
  font-size: 18px;
`
StyledContainer.displayName = 'StyledContainer'

const StyledInput = styled.input`
  padding: 10px;
  font-size: 18px;
  transition: all .2s ease;
 
  &:focus {
    font-size: 30px;
  }
`
StyledInput.displayName = 'StyledInput'

export function ContainerDiv ({ celsius, enterCelsius }) {
  return (
    <div>
      <StyledContainer>
        <StyledInput
          placeholder={'Input Celsius'}
          onChange={e => enterCelsius(e.target.value)}
        />
        <p>{getFahrenheit(celsius)}</p>
      </StyledContainer>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    celsius: getCelsiusInput(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    enterCelsius: temperature => {
      console.log(temperature)
      dispatch(celsiusEntered(temperature))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerDiv)
