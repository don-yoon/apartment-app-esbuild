import React from "react"

const ApartmentIndex = ({apartments}) => {
  return (
    <>
      <div>ApartmentIndex</div>
      {
        apartments.map((object, index) => {
          return(
            <div key={index}> 
              <img src={object.image} /> 
              <div>{ object.street } {object.city}</div> 
            </div>
          )
        })
      }
    </>
  )
}

export default ApartmentIndex