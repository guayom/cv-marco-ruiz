import React from 'react'
import {Wrapper, Icon} from './Wrapper'
import FaPhone from 'react-icons/lib/fa/phone'
import styled from 'styled-components'

const PhoneLink = styled.a`
  color: #fff;
  text-decoration: none;
  
  &:after {
    content: "|";
    margin: 0 10px;
  }

  &:last-of-type:after{
    display: none;
  }
`

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
            <PhoneLink key={i} href={`tel:+506 ${p}`}>{p}</PhoneLink>
          ))}
        </div>
        <br/>
      </Wrapper>
    )
  }
}

export default PhoneNumbers