import React from 'react'

function Info({items}){
  if(!items) {
    return null
  } else {
    return (
      <ul>
        {items.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    )
  }
}

export default Info