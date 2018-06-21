import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 0.8rem;
  align-items: center;
`

const Label = styled.div`
  flex: 0 0 20%;
  text-transform: uppercase;
`

const LevelBarContainer = styled.div`
  flex: 0 0 60%;
  height: 1em;
  background: #a1a1a1;
  position: relative;
  margin: 0 10px;

  &:after {
    content: "";
    display: block;
    height: 100%;
    width: ${props => props.level}%;
    top: 0;
    left: 0;
    background: ${props => props.mainColor};
  }
`

const LevelText = styled.div`
  flex: 0 0 20%;
`

export default ({level, label, levelText, mainColor}) => 
  <Container>
    <Label>{label}</Label>
    <LevelBarContainer level={level} mainColor={mainColor} />
    <LevelText>{levelText}</LevelText>
  </Container>
