import React from "react";
import Education from '../components/Education'
import WorkExperience from '../components/Work'
import Languages from '../components/Languages'
import Courses from '../components/Education/Courses'
import Skills from '../components/Skills'
import Music from '../components/OtherInfo/Music'
import OtherInfo from '../components/OtherInfo'
import References from '../components/References'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import PersonalData from '../components/PersonalData'
import Form from '../components/Form'

const Panel = styled.div`
  background: #fff;
  margin: 10px;
  box-shadow: 0 4px 35px 0 rgba(23,55,87,.1), 0 5px 15px 0 rgba(0,0,0,.07);
  border-radius: 4px;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 30px;
  }

  ${breakpoint('tablet')`
    margin-bottom: ${props => props.last ? 0 : `10px`};
  `}
`

const Title = styled.h2`
  font-size: 16px;
  margin: 0;
  text-transform: uppercase;
  background: #464650;
  padding: 10px 30px;
  color: #fff;
`

const PanelContent = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 17pt;
  letter-spacing: .05em;
  font-weight: 300;
  padding: 30px;
`

const MainContainer = styled.div`
  overflow: auto;
  ${breakpoint('tablet')`
    position: relative;
    margin-left: 350px;
    padding: 30px 60px 30px 30px;
  `}
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark , allImageSharp} = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const {name, mainColor, jobTitle, email, phoneNumbers, languages, address, dateOfBirth, id} = frontmatter;
  const mainImage = allImageSharp.edges.find(i => i.node.sizes.originalName === frontmatter.image).node
  return (
    <MainContainer mainColor={mainColor}>
      <PersonalData 
        name={name} 
        mainColor={mainColor}
        mainImage={mainImage}
        jobTitle={jobTitle}
        email={email}
        phoneNumbers={phoneNumbers}
        id={id}
        dateOfBirth={dateOfBirth}
        languages={languages}
        address={address}
      />
        <Panel>
          <Title>Objective</Title>
          <PanelContent>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </PanelContent>
        </Panel>

        <Panel>
          <Title>Work experience</Title>
          <PanelContent>
            <WorkExperience
              workExperience={frontmatter.workExperience}
              mainColor={frontmatter.mainColor}
            />
          </PanelContent>
        </Panel>

        <Panel>
          <Title>Superior education</Title>
          <PanelContent>
            <Education education={frontmatter.superiorEducation} />
          </PanelContent>
        </Panel>

        <Panel>
          <Title>Music business experience</Title>
          <PanelContent>
            <Music items={frontmatter.other[0].items} />
          </PanelContent>
        </Panel>

        <Panel>
          <Title>Skills</Title>
          <PanelContent>
            <Skills skills={frontmatter.skills} mainColor={frontmatter.mainColor}/>
          </PanelContent>
        </Panel>

        <Panel last>
          <Title>Contact me</Title>
          <PanelContent>
            <Form />
          </PanelContent>
        </Panel>

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
        jobTitle
        image
        dateOfBirth
        placeOfBirth
        phoneNumbers
        civilStatus
        email
        mainColor
        id
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
          levelText
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
          sizes(maxWidth: 300, maxHeight: 300) {
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
