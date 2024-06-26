import React from 'react'

export default function Card(props) {
    return (
      <div className='card2'>
          <div>
              <h5>{props.items.id}.{props.items.name}</h5>
              <span className='plataforma'>{props.items.definition}</span>
          </div>
        
      </div>
    )
  }