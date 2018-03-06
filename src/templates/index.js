import React from "react";
import ProfilePic from '../components/PersonalData/profilePic'
import PhoneNumbers from '../components/PersonalData/PhoneNumbers'
import Info from '../components/PersonalData/Info'
import styled from 'styled-components'

const PersonalInfo = styled.div`
    flex: 2 0;
    background: ${props => props.mainColor};
    margin-right: 20px;
    color: #fff;
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
        <PhoneNumbers 
          phoneNumbers={frontmatter.phoneNumbers} 
        />
        <Info
          address={frontmatter.address}
          dateOfBirth={frontmatter.dateOfBirth}
          placeOfBirth={frontmatter.placeOfBirth}
          civilStatus={frontmatter.civilStatus}
        />
      </PersonalInfo>

      <div style={{flex: `4 0`}}>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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