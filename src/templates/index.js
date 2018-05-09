import React from "react";
import ProfilePic from '../components/PersonalData/profilePic'
import PhoneNumbers from '../components/PersonalData/PhoneNumbers'
import Info from '../components/PersonalData/Info'
import Email from '../components/PersonalData/Email'
import Education from '../components/Education'
import Languages from '../components/Languages'
import Courses from '../components/Education/Courses'
import Skills from '../components/Skills'
import Music from '../components/OtherInfo/Music'
import OtherInfo from '../components/OtherInfo'
import References from '../components/References'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import FaGraduationCap from 'react-icons/lib/fa/graduation-cap'
import FaCheck from 'react-icons/lib/fa/check'
import IoBriefcase from 'react-icons/lib/io/briefcase'
import MdLibraryMusic from 'react-icons/lib/md/library-music'
import MdSettingsApplications from 'react-icons/lib/md/settings-applications'
import FaGlobe from 'react-icons/lib/fa/globe'

const PersonalInfo = styled.div`
    background: ${props => props.mainColor};
    color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    font-size: 16px;
`

const Panel = styled.div`
  background: #fff;
  padding: 40px;
  margin-bottom: ${props => props.last ? 0 : `20px`};
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  display: block;

  ${breakpoint('tablet')`
    display: grid;
    grid-template-columns: 1fr 7fr;
  `}
`

const IconContainer = styled.div`
  font-size: 2em;
  color: #767270;
  padding-top: 10px;
`

const Title = styled.h2`
  font-size: 22pt;
  line-height: 37pt;
  margin: 0 0 20px;
  color: #767270;
`

const PanelContent = styled.div`
  color: #767270;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 10pt;
  line-height: 17pt;
`

const MainContainer = styled.div`
  ${breakpoint('tablet')`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
    margin: 40px auto;
    max-width: 1100px;
  `}
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark , allImageSharp} = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const mainImage = allImageSharp.edges.find(i => i.node.sizes.originalName === frontmatter.image).node
  return (
    <MainContainer>
      <PersonalInfo
        mainColor={frontmatter.mainColor}
      >
        <ProfilePic 
          image={mainImage}
          name={frontmatter.name}
          jobTitle={frontmatter.jobTitle}  
        />
        <PhoneNumbers phoneNumbers={frontmatter.phoneNumbers} />
        <Email email={frontmatter.email} />
        <Info
          address={frontmatter.address}
          dateOfBirth={frontmatter.dateOfBirth}
          placeOfBirth={frontmatter.placeOfBirth}
          civilStatus={frontmatter.civilStatus}
        />
      </PersonalInfo>

      <div>
        <Panel>
          <IconContainer>
            <FaCheck />
          </IconContainer>
          <PanelContent>
            <Title>Objective</Title>
            <div dangerouslySetInnerHTML={{__html: html}} />
          </PanelContent>
        </Panel>

        <Panel>
          <IconContainer>
            <IoBriefcase />
          </IconContainer>
          <PanelContent>
            <Title>Work experience</Title>
            <Education education={frontmatter.superiorEducation} />
          </PanelContent>
        </Panel>

        <Panel>
          <IconContainer>
            <FaGraduationCap />
          </IconContainer>
          <PanelContent>
            <Title>Superior education</Title>
            <Education education={frontmatter.superiorEducation} />
          </PanelContent>
        </Panel>

        <Panel>
          <IconContainer>
            <MdLibraryMusic />
          </IconContainer>
          <PanelContent>
            <Title>Music business experience</Title>
            <Music items={frontmatter.other[0].items} />
          </PanelContent>
        </Panel>

        <Panel>
          <IconContainer>
            <MdSettingsApplications />
          </IconContainer>
          <PanelContent>
            <Title>Proficient Programs</Title>
            <Skills skills={frontmatter.skills} />
          </PanelContent>
        </Panel>

        <Panel last>
          <IconContainer>
            <FaGlobe />
          </IconContainer>
          <PanelContent>
            <Title>Languages</Title>
            <Languages languages={frontmatter.languages} />
          </PanelContent>
        </Panel>

      </div>
    </MainContainer>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        name
        address
        image
        dateOfBirth
        placeOfBirth
        phoneNumbers
        civilStatus
        email
        mainColor
        superiorEducation {
            degree
            startingYear
            finishingYear
            institution
        }
        workExperience {
          startingYear
          finishingYear
          jobTitle
          company
          address
          responsibilities
        }
        languages{
          title
          level
        }
        skills{
          title
          level
        }
        other{
          title
          items{
            description
            startingYear
            finishingYear
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          id
          sizes {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
          }
        }
      }
    }
  }
`;