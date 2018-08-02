import React from 'react'
import Timeline from '../Timeline';

function Music({ items }) {
  if (!items) {
    return null
  } else {
    const sortedItems = items.sort(function (a, b) {
      return a.year - b.year;
    }).reverse()
    return (
      <div>
        {sortedItems.map((e, i) => (
          <Timeline
            key={i}
            start={e.startingYear}
            end={e.finishingYear}
            subtitle={e.description}
            last={i === sortedItems.length - 1}
            items={[]}
          />
        ))}
      </div>
    )
  }
}

export default Music