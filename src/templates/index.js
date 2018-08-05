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
import Panel from '../components/Panel'
import Navigation from '../components/Navigation'

const MainContainer = styled.div`
  overflow: auto;
`

const PanelsContainer = styled.div`
  ${breakpoint('tablet')`
    overflow: auto;
    position: relative;
    margin-left: 350px;
    padding: 65px 60px 30px 30px;
  `}

  @media print {
    margin: 0;
    padding: 0;
  }
`

const Objective = styled.div`
  font-size: 1.5em;
  margin-bottom: 20px;
  line-height: 1.2em;
  padding: 20px;
  background: #f0f0f0;

  strong {
    display: block;
  }

  @media print {
    background: transparent;
    margin: 0 0 3px 0;
    font-size: 12px;
    padding: 0;

    strong {
      display: inline;
    }
  }
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

      <PanelsContainer>
    
        <Navigation />

        <Panel title="About Me" id="about">
          <Objective><strong>Objective: </strong>{frontmatter.objective}</Objective>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Panel>

        <Panel title="Work experience" id="work">
          <WorkExperience
            workExperience={frontmatter.workExperience}
            mainColor={frontmatter.mainColor}
          />
        </Panel>

        <Panel title="Superior education" id="education">
          <Education education={frontmatter.superiorEducation} />
        </Panel>

        <Panel title="Music business experience" id="music">
          <Music items={frontmatter.other[0].items} />
        </Panel>

        <Panel title="Skills" id="skills">
          <Skills skills={frontmatter.skills} mainColor={frontmatter.mainColor}/>
        </Panel>

        <Panel title="Contact me" id="contact" last>
          <Form />
        </Panel>

      </PanelsContainer>

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
        objective
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
