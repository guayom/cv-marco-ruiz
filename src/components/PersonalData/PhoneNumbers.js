import React from 'react'

function PhoneNumbers({phoneNumbers}){
  if(!phoneNumbers) {
    return null
  } else {
    return (
      <div>
        {phoneNumbers.map((p,i) => (
          <div key={i}>
            <a href={`tel:+506 ${p}`}>{p}</a>
          </div>
        ))}
      </div>
    )
  }
}

export default PhoneNumbers