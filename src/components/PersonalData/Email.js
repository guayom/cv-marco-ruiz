import React from 'react'

function Email({email}){
  if(!email) {
    return null
  } else {
    return (
      <div>
        {email}
      </div>
    )
  }
}

export default Email