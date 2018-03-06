import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image';


const ImageContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding-top: 100%;
    background: #fff;
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
    line-height: 30pt;
    margin: 0 0 5px;
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
      <div style={{width:`100%`, height: `100%`, overflow: `hidden`, position: `absolute`, top: 0, left: 0}}>
          <Img sizes={image.sizes} />
      </div>
      <NameContainer>
          <Name>{name}</Name>
          <JobDescription>{jobTitle}</JobDescription>
      </NameContainer>
  </ImageContainer>
)