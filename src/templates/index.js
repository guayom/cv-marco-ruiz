import React from "react";
import ProfilePic from '../components/PersonalData/profilePic'
import PhoneNumbers from '../components/PersonalData/PhoneNumbers'
import Info from '../components/PersonalData/Info'
import Email from '../components/PersonalData/Email'
import Education from '../components/Education'
import Courses from '../components/Education/Courses'
import OtherInfo from '../components/OtherInfo'
import References from '../components/References'
import styled from 'styled-components'

const PersonalInfo = styled.div`
    flex: 2 0;
    background: ${props => props.mainColor};
    margin-right: 20px;
    color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    font-size: 16px;
`

const Panel = styled.div`
  background: #fff;
  padding: 40px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark , allImageSharp} = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const mainImage = allImageSharp.edges.find(i => i.node.sizes.originalName === frontmatter.image).node
  return (
    <div style={{display: `flex`}}>
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

      <div style={{flex: `4 0`}}>
        <Panel>
          <h2>Experiencia Laboral</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Panel>

        <Panel>
          <h2>Educación Superior</h2>
          <Education education={frontmatter.superiorEducation} />
        </Panel>

        <Panel>
          <h2>Otros cursos</h2>
          <Courses courses={frontmatter.otherCourses} />
        </Panel>

        <Panel>
          <h2>Otros datos de Interés:</h2>
          <OtherInfo items={frontmatter.otherInfo} />
        </Panel>

        <Panel>
          <h2>Referencias:</h2>
          <References references={frontmatter.references} />
        </Panel>


      </div>
    </div>
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