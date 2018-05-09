import React from 'react'
import { Item, Title, Description } from '../Education/styles'

function Languages({ languages }) {
  if (!languages) {
    return null
  } else {
    return (
      <div>
        {languages.map((e, i) => (
          <Item key={i}>
            <Title>{e.title}</Title>
            <Description>{e.level}</Description>
          </Item>
        ))}
      </div>
    )
  }
}

export default Languages