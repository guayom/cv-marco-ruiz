import React from 'react'
import {Wrapper, Icon} from './Wrapper'
import FaUser from 'react-icons/lib/fa/user'
import styled from 'styled-components'

const DataList = styled.dl`
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;

  dt {
    font-size: 13px;
    font-weight: 600;
    line-height: 1em;
    margin: 0 0 5px;
    font-family: 'Open Sans', sans-serif;
  }

  dd {
    font-size: 15px;
    margin: 0 0 1em;
    line-height: 1em;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`

function Address({address, dateOfBirth, placeOfBirth, civilStatus}){
  if(!address) {
    return null
  } else {
    return (
      <DataList>
        <dt>Address:</dt>
        <dd>{address}</dd>
        <dt>Date of birth:</dt>
        <dd>{dateOfBirth}</dd>
        <dt>Nationality:</dt>
        <dd>{placeOfBirth}</dd>
        <dt>Civil status:</dt>
        <dd>{civilStatus}</dd>
      </DataList>
    )
  }
}

export default Address