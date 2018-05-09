import React from 'react'
import { Item, Title, Description } from '../Education/styles'

function Skills({ skills }) {
  if (!skills) {
    return null
  } else {
    return (
      <div>
        {skills.map((e, i) => (
          <Item key={i}>
            <Title>{e.title}</Title>
            <Description>{e.level}</Description>
          </Item>
        ))}
      </div>
    )
  }
}

export default Skills