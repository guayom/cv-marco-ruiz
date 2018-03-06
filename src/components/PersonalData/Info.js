import React from 'react'

function Address({address, dateOfBirth, placeOfBirth, civilStatus}){
  if(!address) {
    return null
  } else {
    return (
      <div>
        <strong>Dirección:</strong> {address}<br/>
        <strong>Fecha de nacimiento:</strong> {dateOfBirth}<br/>
        <strong>Lugar de nacimiento:</strong> {placeOfBirth}<br/>
        <strong>Estado civil:</strong> {civilStatus}<br/>
      </div>
    )
  }
}

export default Address