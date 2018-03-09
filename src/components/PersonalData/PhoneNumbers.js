import React from 'react'
import {Wrapper, Icon} from './Wrapper'
import FaPhone from 'react-icons/lib/fa/phone'

function PhoneNumbers({phoneNumbers}){
  if(!phoneNumbers) {
    return null
  } else {
    return (
      <Wrapper>
        <Icon>
          <FaPhone />
        </Icon>
        <div>
          {phoneNumbers.map((p,i) => (
            <div key={i}>
              <a style={{color: `#fff`, textDecoration: `none`}} href={`tel:+506 ${p}`}>{p}</a>
            </div>
          ))}
        </div>
      </Wrapper>
    )
  }
}

export default PhoneNumbers