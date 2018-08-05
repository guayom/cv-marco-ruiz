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

    @media print {
      margin-top: 0;
      font-size: 20px;
    }
  }

  h2 {
    font-size: 22px;
    margin-bottom: 1em;
    font-weight: 400;

    @media print {
      margin-bottom: 0;
      font-size: 18px;
    }
  }

  p {
    margin-bottom: 5px;

    @media print {
      margin-bottom: 0;
    }
  }

  ${breakpoint('tablet')`
    padding: 30px 60px;
    width: 350px;
    height: 100vh;
    position: fixed;
    left: 0;
    bottom :0;
  `}

  @media print {
    padding: 0;
    position: static;
    background: #f0f0f0;
    width: 100%;
    padding: 15px 30px;
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-column-gap: 20px;
    height: auto;
    font-size: 12px;
  }
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

  @media print {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    margin-bottom: 0;
  }
`

const InfoContainer = styled.div`
  .cta {
    margin-bottom: 30px;
  }

  @media print {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-column-gap: 20px;

    .cta {
      display: none;
    }
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
      <InfoContainer>
        <div>
          <h1>{name}</h1>
          <h2>{jobTitle}</h2>
          <AnchorLink href='#contact' className="cta">Contact Me</AnchorLink>
          <p>{email}</p>
          <p>{phoneNumbers}</p>
        </div>

        <DataList>
          <div>
            <dt>Address</dt>
            <dd>{address}</dd>
            <dt>Languages</dt>
            <dd>
              {languages.map((language, i) =>
                <p key={i}>{language.title}, {language.levelText}</p>
              )}
            </dd>
          </div>
          <div>
            <dt>Date of birth</dt>
            <dd>{dateOfBirth}</dd>
            <dt>Id Number</dt>
            <dd>{id}</dd>
          </div>
        </DataList>
      </InfoContainer>
    </PersonalInfo>
  )
}

export default PersonalData
