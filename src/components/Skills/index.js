import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const colors = {
  primary: '#92b656',
  secondary: '#e9dd57',
}

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const GridChild = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 100%;
    margin-bottom: 30px;

    ${breakpoint('tablet')`
      flex-basis: 48%;
      max-width: 48%;
    `}
`

const LevelContainer = styled.div`
  width: 100%;
  background: linear-gradient(to right, ${colors.primary}, ${colors.secondary});
  position: relative;
  height: 40px;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
`

const Level = styled.div`
  width: ${props => props.level}%;
  height: 100%;
  background: transparent;
  flex: 0 0 ${props => props.level}%;
  position: relative;

  &:after {
    content: "${props => props.level}%";
    position: absolute;
    right: 5px;
    font-size: 16px;
    height: 100%;
    display flex;
    align-items: center;
  }

  ${breakpoint('tablet')`
    &:after {
      font-size: 12px;
    }
  `}
`

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  align-items: center;
`

const Mask = styled.div`
  height: 100%;
  background: #f0f0f0;
  flex: 1 1;
  box-shadow: inset 2px 2px 8px 0px rgba(0,0,0,0.3);
`

function Skills({ skills, mainColor }) {
  if (!skills) {
    return null
  } else {
    return (
      <Grid>
        {skills.map((e, i) => (
          <GridChild key={i}>
            <LevelContainer>
              <Title>{e.title}</Title>
              <Level level={e.level} mainColor={mainColor} />
              <Mask />
            </LevelContainer>
          </GridChild>
        ))}
      </Grid>
    )
  }
}

export default Skills
