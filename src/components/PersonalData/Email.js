import React from 'react'
import {Wrapper, Icon} from './Wrapper'
import FaEnvelope from 'react-icons/lib/fa/envelope'

function Email({email}){
  if(!email) {
    return null
  } else {
    return (
      <Wrapper>
        <Icon>
          <FaEnvelope />
        </Icon>
        <div>
          {email}
        </div>
        <br />
      </Wrapper>
    )
  }
}

export default Email