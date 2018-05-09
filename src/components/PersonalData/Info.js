import React from 'react'
import {Wrapper, Icon} from './Wrapper'
import FaUser from 'react-icons/lib/fa/user'
import styled from 'styled-components'

const DataList = styled.dl`
  margin: 0;
  padding: 0;

  dt {
    font-size: 13px;
    font-weight: 600;
    line-height: 1em;
    margin: 0 0 5px;
  }

  dd {
    font-size: 15px;
    margin: 0 0 1em;
    line-height: 1em;
    padding: 0;
  }
`

function Address({address, dateOfBirth, placeOfBirth, civilStatus}){
  if(!address) {
    return null
  } else {
    return (
      <Wrapper>
        <Icon>
          <FaUser />
        </Icon>
        <DataList>
          <dt>Dirección:</dt>
          <dd>{address}</dd>
          <dt>Fecha de nacimiento:</dt>
          <dd>{dateOfBirth}</dd>
          <dt>Lugar de nacimiento:</dt>
          <dd>{placeOfBirth}</dd>
          <dt>Estado civil:</dt>
          <dd>{civilStatus}</dd>
        </DataList>
      </Wrapper>
    )
  }
}

export default Address