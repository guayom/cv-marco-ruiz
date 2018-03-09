import React from 'react'
import {Wrapper, Icon} from './Wrapper'
import FaUser from 'react-icons/lib/fa/user'

function Address({address, dateOfBirth, placeOfBirth, civilStatus}){
  if(!address) {
    return null
  } else {
    return (
      <Wrapper>
        <Icon>
          <FaUser />
        </Icon>
        <div>
          <strong>Dirección:</strong><br/>{address}<br/><br/>
          <strong>Fecha de nacimiento:</strong><br/>{dateOfBirth}<br/><br/>
          <strong>Lugar de nacimiento:</strong><br/>{placeOfBirth}<br/><br/>
          <strong>Estado civil:</strong><br/>{civilStatus}
        </div>
      </Wrapper>
    )
  }
}

export default Address