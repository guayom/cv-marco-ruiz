import React from 'react'
import { Item, Title, Description } from '../Education/styles'
import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  & > div {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 48%;
    max-width: 48%;
  }
`

const Level = styled.div`
  height: 10px;
  width: 100%;
  background: #eee;
  position: relative;

  &:after {
    content: "";
    width: ${props => props.level}%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${props => props.mainColor};
  }
`


function Skills({ skills, mainColor }) {
  if (!skills) {
    return null
  } else {
    return (
      <Grid>
        {skills.map((e, i) => (
          <Item key={i}>
            <Title>{e.title}</Title>
            <Level level={e.level} mainColor={mainColor} />
          </Item>
        ))}
      </Grid>
    )
  }
}

export default Skills
