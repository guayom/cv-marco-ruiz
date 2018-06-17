import React from 'react'
import {Item, Title, Institution, Year, Description} from '../Education/styles'
import styled from 'styled-components'

const Responsibilities = styled.ul`
  margin: 0 0 0 20px;

  li {
    margin-bottom: 0;
    }
`

function WorkExperience({workExperience}){
  if(!workExperience) {
    return null
  } else {
    const sortedWorkExperience = workExperience.sort(function (a, b) {
      return a.startingYear - b.startingYear;
    }).reverse()
    return (
      <div>
        {sortedWorkExperience.map((e, i) => (
          <Item key={i}>
            <Year>{e.startingYear}-{e.finishingYear}</Year>
            <Title>{e.company}</Title>
            <Institution>{e.jobTitle}</Institution>
            <Responsibilities>
              {e.responsibilities.map((item, i) => 
                <li key={i}>{item}</li>
              )}
            </Responsibilities>
          </Item>
        ))}
      </div>
    )
  }
}

export default WorkExperience
