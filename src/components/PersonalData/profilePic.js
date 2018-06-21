import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image';


const ImageContainer = styled.div`
    box-sizing: border-box;
    margin-bottom: 20px;
`

const NameContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 30px 30px;
`

const Name = styled.h1`
    font-size: 22pt;
    line-height: 27pt;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    display: block;
`

const JobDescription = styled.p`
    margin: 0;
    font-size: 14px;
`

export default ({image, name, jobTitle}) => (
  <ImageContainer>
    <Img sizes={image.sizes} />
  </ImageContainer>
)
