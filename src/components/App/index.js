import React from 'react'
import styled from 'styled-components'

import { ContainerDiv } from '..'

const StyledApp = styled.div`
  color: white;
  padding: 20px 40px 20px 40px;
  width: 70%;
  margin: 10px auto 10px auto;
  background-color: #a91619;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`
StyledApp.displayName = StyledApp

export default function App () {
  return (
    <StyledApp>
      <ContainerDiv />
    </StyledApp>
  )
}
