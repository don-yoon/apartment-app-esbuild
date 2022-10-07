import React from "react"
import Card from "../components/Card"

const ApartmentIndex = ({apartments}) => {
  return (
    <>
      <div className="text-3xl">ApartmentIndex</div>
      <div className="flex">
        <Card apartments={apartments}/>
      </div>
    </>
  )
}

export default ApartmentIndex 