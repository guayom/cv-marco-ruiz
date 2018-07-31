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
  padding: 30px;
  margin: 10px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  border-radius: 8px;

  &:last-of-type {
    margin-bottom: 30px;
  }

  ${breakpoint('tablet')`
    padding: 50px;
    margin-bottom: ${props => props.last ? 0 : `20px`};
  `}
`

const Title = styled.h2`
  font-size: 22pt;
  line-height: 37pt;
  margin: 0 0 20px;
`

const PanelContent = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 10pt;
  line-height: 17pt;
`

const MainContainer = styled.div`
    background: #283048;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #859398, #283048);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #859398, #283048); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    overflow: auto;
  ${breakpoint('tablet')`
    position: relative;
    margin-left: 350px;
    padding: 30px;
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
          <PanelContent>
            <Title>Objective</Title>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </PanelContent>
        </Panel>

        <Panel>
          <PanelContent>
            <Title>Work experience</Title>
            <WorkExperience
              workExperience={frontmatter.workExperience}
              mainColor={frontmatter.mainColor}
            />
          </PanelContent>
        </Panel>

        <Panel>
          <PanelContent>
            <Title>Superior education</Title>
            <Education education={frontmatter.superiorEducation} />
          </PanelContent>
        </Panel>

        <Panel>
          <PanelContent>
            <Title>Music business experience</Title>
            <Music items={frontmatter.other[0].items} />
          </PanelContent>
        </Panel>

        <Panel last>
          <PanelContent>
            <Title>Skills</Title>
            <Skills skills={frontmatter.skills} mainColor={frontmatter.mainColor}/>
          </PanelContent>
        </Panel>

        <Form />
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
