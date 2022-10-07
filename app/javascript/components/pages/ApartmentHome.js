import React from "react"
import { Link } from "react-router-dom"

const ApartmentHome = () => {
  return (
    <>
      <div className="text-3xl">ApartmentHome</div>
      <div className="text-lg text-blue-700">
        <Link to="/apartmentindex"> See All the Apartments </Link>
      </div>
    </>
  )
}

export default ApartmentHome