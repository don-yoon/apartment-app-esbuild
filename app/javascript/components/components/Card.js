import React from 'react'

const Card = ({apartments}) => {
  return(
    apartments.map((object, index) => {
          return(
            <div key={index}> 
              <img className='w-[20vw] h-[30vh] object-cover' src={object.image} /> 
              <div>{ object.street } {object.city}</div> 
            </div>
          )
        })  
  )
}

export default Card