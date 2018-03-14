import React from 'react'
import {Item, Title, Institution, Year, Description} from './styles'

function Education({EmploymentHistory}){
  if(!EmploymentHistory) {
    return null
  } else {
    return (
      <div>
        {EmploymentHistory.map((e, i) => (
          <Item key={i}>
            <Year>{e.begin}-{e.end}</Year>
            <Title>{e.jobDescription}</Title>
            <Institution>{e.jobDescription}</Institution>
            <Description>{e.location}</Description>
          </Item>
        ))}
      </div>
    )
  }
}

export default Education