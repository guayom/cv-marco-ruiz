import React from 'react'
import Timeline from '../Timeline';

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
          <Timeline
            key={i}
            start={e.startingYear}
            end={e.finishingYear}
            title={e.company}
            subtitle={e.jobTitle}
            items={e.responsibilities}
            last={i === sortedWorkExperience.length - 1}
          />
        ))}
      </div>
    )
  }
}

export default WorkExperience
