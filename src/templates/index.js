import React from "react";
import ProfilePic from '../components/PersonalData/profilePic'
import PhoneNumbers from '../components/PersonalData/PhoneNumbers'
import Info from '../components/PersonalData/Info'
import Email from '../components/PersonalData/Email'
import Education from '../components/Education'
import EmploymentHistory from '../components/EmploymentHistory'
import Courses from '../components/Education/Courses'
import OtherInfo from '../components/OtherInfo'
import References from '../components/References'
import styled from 'styled-components'
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap'
import breakpoint from 'styled-components-breakpoint'

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
            <FaGraduationCap />
          </IconContainer>
          <PanelContent>
            <Title>Experiencia Laboral</Title>
            <EmploymentHistory EmploymentHistory={frontmatter.EmploymentHistory} />
          </PanelContent>
        </Panel>

        <Panel>
          <IconContainer>
            <FaGraduationCap />
          </IconContainer>
          <PanelContent>
            <Title>Educación Superior</Title>
            <Education education={frontmatter.superiorEducation} />
          </PanelContent>
        </Panel>

        <Panel>
          <IconContainer>
            <FaGraduationCap />
          </IconContainer>
          <PanelContent>
            <Title>Otros cursos</Title>
            <Courses courses={frontmatter.otherCourses} />
          </PanelContent>
        </Panel>

        <Panel>
          <IconContainer>
            <FaGraduationCap />
          </IconContainer>
          <PanelContent>
            <Title>Otros datos de Interés:</Title>
            <OtherInfo items={frontmatter.otherInfo} />
          </PanelContent>
        </Panel>

        <Panel last>
          <IconContainer>
            <FaGraduationCap />
          </IconContainer>
          <PanelContent>
            <Title>Referencias:</Title>
            <References references={frontmatter.references} />
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
        jobTitle
        address
        image
        dateOfBirth(formatString: "DD-MM-YYYY")
        placeOfBirth
        phoneNumbers
        civilStatus
        email
        mainColor
        EmploymentHistory {
          begin
          end
          company
          location
          jobDescription
          responsibilities
        }
        superiorEducation {
            degree
            description
            startingYear
            finishingYear
            institution
        }
        otherCourses {
            title
            institution
            year
            ongoing
        }
        otherInfo
        references{
            name
            description
            category
            phoneNumber
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