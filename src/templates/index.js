import React from "react";
import PersonalData from '../components/PersonalData'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark , allImageSharp} = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const mainImage = allImageSharp.edges.find(i => i.node.sizes.originalName === frontmatter.image).node
  return (
    <div style={{display: `flex`}}>
      <PersonalData 
        image={mainImage}
        mainColor={frontmatter.mainColor}
        name={frontmatter.name}
        jobTitle={frontmatter.jobTitle}
      />
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
        dateOfBirth(formatString: "MMMM DD, YYYY")
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