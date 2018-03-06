import React from 'react'
import {Item, Title, Institution, Year, Description} from './styles'

function Education({education}){
  if(!education) {
    return null
  } else {
    return (
      <div>
        {education.map((e, i) => (
          <Item key={i}>
            <Year>{e.startingYear}-{e.finishingYear}</Year>
            <Title>{e.description}</Title>
            <Institution>{e.institution}</Institution>
            <Description>{e.degree}</Description>
          </Item>
        ))}
      </div>
    )
  }
}

export default Education