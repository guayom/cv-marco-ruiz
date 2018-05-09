import React from 'react'
import { Item, Title, Institution, Year, Description } from '../Education/styles'

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
          <Item key={i}>
            <Year>{e.startingYear}-{e.finishingYear}</Year>
            <Title>{e.description}</Title>
          </Item>
        ))}
      </div>
    )
  }
}

export default Music