// This component has not been used anywhere

import React from 'react'
import './CardContainer.css'

const CardContainer = (propsByDefault) => {
  return (
    <div className='card-container'>
      {propsByDefault.children}
    </div>
  )
}

export default CardContainer