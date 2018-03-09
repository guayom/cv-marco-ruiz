import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px 0 20px 40px;
  display: grid;
  grid-template-columns: 1fr 4fr;

  div:last-child {
    border-bottom: solid 1px #fff;
    padding-bottom: 20px;

    div:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`

const Icon = styled.div`
  font-size: 1.5em;
`

export default {Wrapper, Icon}