import React from 'react'
import ProfilePic from './profilePic'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const PersonalInfo = styled.div`
  background: #fff;
  box-shadow: 1px 1px 15px 1px rgba(0,0,0,.2);
  font-size: 16px;
  overflow:auto
  padding: 30px;

  h1 {
    font-size: 45px;
    margin-bottom: 5px;
  }

  h2 {
    font-size: 25px;
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 5px;
  }

  ${breakpoint('tablet')`
    width: 350px;
    height: calc(100vh + 120px);
    padding-top: 60px;
    position: fixed;
    top: -40px;
    left: 0;
    bottom :0;
  `}
`

const PersonalData = ({mainColor, mainImage, name, jobTitle, email, phoneNumbers}) => {
  return (
    <PersonalInfo
      mainColor={mainColor}
    >
      <ProfilePic 
        image={mainImage}
        name={name}
        jobTitle={jobTitle}  
      />
      <h1>{name}</h1>
      <h2>{jobTitle}</h2>
      <p>{email}</p>
      <p>{phoneNumbers}</p>
    </PersonalInfo>
  )
}

export default PersonalData
