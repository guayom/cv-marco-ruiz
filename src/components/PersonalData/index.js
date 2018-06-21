import React from 'react'
import ProfilePic from './profilePic'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import LevelBar from '../LevelBar'

const PersonalInfo = styled.div`
  background: #fff;
  box-shadow: 1px 1px 15px 1px rgba(0,0,0,.2);
  font-size: 16px;
  overflow:auto
  padding: 30px;

  h1 {
    font-size: 45px;
    margin-bottom: 5px;
    margin-top: 1em;
  }

  h2 {
    font-size: 25px;
    margin-bottom: 1em;
    font-weight: 400;
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

const DataList = styled.dl`
  margin-top: 20px;

  dt {
    font-size: 0.7rem;
    margin: 0;
  }

  dd {
    margin: 0 0 10px;
    line-height: 1em;
  }
`

const PersonalData = ({mainColor, mainImage, name, jobTitle, email, phoneNumbers, languages, address, dateOfBirth, id}) => {
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
      <br/>
      {languages.map(language =>
        <LevelBar
          label={language.title}
          level={language.level}
          levelText={language.levelText}
          mainColor={mainColor}
        />
      )}
      <DataList>
        <dt>Address</dt>
        <dd>{address}</dd>
        <dt>Date of birth</dt>
        <dd>{dateOfBirth}</dd>
        <dt>Id Number</dt>
        <dd>{id}</dd>
      </DataList>
    </PersonalInfo>
  )
}

export default PersonalData
