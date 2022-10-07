import React from 'react'

const Card = ({apartments}) => {
  return(
    apartments.map((object, index) => {
          return(
            <div key={index}> 
              <img src={object.image} /> 
              <div>{ object.street } {object.city}</div> 
            </div>
          )
        })  
  )
}

export default Card