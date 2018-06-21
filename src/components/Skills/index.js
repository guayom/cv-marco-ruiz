import React from 'react'
import { Item, Title, Description } from '../Education/styles'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const GridChild = Item.extend`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 100%;
    ${breakpoint('tablet')`
      flex-basis: 48%;
      max-width: 48%;
    `}
`

const LevelContainer = styled.div`
  height: 10px;
  width: 100%;
  background: #eee;
  position: relative;
`

const Level = styled.div`
  width: ${props => props.level}%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${props => props.mainColor};
`


function Skills({ skills, mainColor }) {
  if (!skills) {
    return null
  } else {
    return (
      <Grid>
        {skills.map((e, i) => (
          <GridChild key={i}>
            <Title>{e.title}</Title>
            <LevelContainer>
              <Level level={e.level} mainColor={mainColor} />
            </LevelContainer>
          </GridChild>
        ))}
      </Grid>
    )
  }
}

export default Skills
