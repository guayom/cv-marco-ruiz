import React from 'react'
import {Wrapper, Icon} from './Wrapper'
import FaPhone from 'react-icons/lib/fa/phone'
import styled from 'styled-components'

const PhoneLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  margin: 0 10px 0 0;

  &:before {
    content: "|";
    margin: 0 10px 0 0;
    display: ${props => props.first ? 'none' : 'inline-block'};
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
            <PhoneLink key={i} href={`tel:+506 ${p}`} first={i === 0}>{p}</PhoneLink>
          ))}
        </div>
        <br/>
      </Wrapper>
    )
  }
}

export default PhoneNumbers
