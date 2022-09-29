import React from 'react'

const ApartmentIndex = ({apartments}) => {

    const allApartments = (array) => {
        for(let i = 0; i < array.length; i++){
            return(
                <div key={i+1}>
                    { array[i].street }
                    { array[i].city }
                    { array[i].state }
                </div>
            )
        }
    }
    console.log("childcomponent: ", apartments.length)
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