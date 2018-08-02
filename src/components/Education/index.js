import React from 'react'
import Timeline from '../Timeline';

function Education({education}){
  if(!education) {
    return null
  } else {
    const sortedEducation = education.sort(function (a, b) {
      return a.year - b.year;
    }).reverse()
    return (
      <div>
        {sortedEducation.map((e, i) => (
          <Timeline
            key={i}
            start={e.startingYear}
            end={e.finishingYear}
            subtitle={e.degree}
            last={i === sortedEducation.length - 1}
            items={[e.institution]}
          />
        ))}
      </div>
    )
  }
}

export default Education