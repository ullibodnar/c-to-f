import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.input`
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  width: auto;
  box-shadow: none;
  border: none;
`

export default function Input (placeholder) {
  let fahrenheit = 'Temperature in Fahrenheit'
  let celsius = 'Temperature in Celsius'

  if (placeholder === 'fahrenheit') {
    return <StyledForm placeholder={fahrenheit} />
  } else {
    return <StyledForm placeholder={celsius} />
  }
}
