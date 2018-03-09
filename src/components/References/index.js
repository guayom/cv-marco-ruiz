import React from 'react'
import {Item} from '../Education/styles'

function References({references}){
  if(!references) {
    return null
  } else {
    return (
      <div>
        {references.map((e, i) => (
          <Item key={i}>
            {e.name}<br/>
            {e.description}<br/>
            <a href={`tel:+506 ${e.phoneNumber}`}>{e.phoneNumber}</a><br/>
          </Item>
        ))}
      </div>
    )
  }
}

export default References