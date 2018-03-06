import React from 'react'
import {Item, Title, Institution, Year, Description} from './styles'

function Courses({courses}){
  if(!courses) {
    return null
  } else {
    const sortedCourses = courses.sort(function (a, b) {
      return a.year - b.year;
    }).reverse()
    return (
      <div>
        {sortedCourses.map((e, i) => (
          <Item key={i}>
            <Year>{e.ongoing ? "Cursando actualmente" : e.year}</Year>
            <Title>{e.title}</Title>
            <Institution>{e.institution}</Institution>
          </Item>
        ))}
      </div>
    )
  }
}

export default Courses