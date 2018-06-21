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

const Panel = styled.div`
  background: #fff;
  padding: 40px;
  margin-bottom: ${props => props.last ? 0 : `20px`};
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  display: block;
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
    <MainContainer>
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
            <div>
              <h3>Languages</h3>
              <Languages languages={frontmatter.languages} />
            </div>
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
