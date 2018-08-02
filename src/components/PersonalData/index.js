import React from 'react'
import ProfilePic from './profilePic'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const PersonalInfo = styled.div`
  font-size: 16px;
  overflow:auto
  padding: 30px;

  h1 {
    font-size: 30px;
    margin-bottom: 5px;
    margin-top: 1em;
    text-transform: uppercase;
  }

  h2 {
    font-size: 22px;
    margin-bottom: 1em;
    font-weight: 400;
  }

  p {
    margin-bottom: 5px;
  }

  ${breakpoint('tablet')`
    padding: 30px 60px;
    width: 350px;
    height: 100vh;
    position: fixed;
    left: 0;
    bottom :0;
  `}
`

const DataList = styled.dl`
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
    <PersonalInfo>
      <ProfilePic 
        image={mainImage}
        name={name}
        jobTitle={jobTitle}  
      />
      <h1>{name}</h1>
      <h2>{jobTitle}</h2>

      <AnchorLink href='#contact' className="cta">Contact Me</AnchorLink>

      <br/>
      <p>{email}</p>
      <p>{phoneNumbers}</p>
      <DataList>
        <dt>Languages</dt>
        <dd>
          {languages.map(language =>
            <p>{language.title}, {language.levelText}</p>
          )}
        </dd>
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
