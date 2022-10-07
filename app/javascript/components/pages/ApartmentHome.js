import React from "react"
import { Link } from "react-router-dom"

const ApartmentHome = () => {
  return (
    <>
      <div className="text-3xl">ApartmentHome</div>
      <Link to="/apartmentindex"> See All the Apartments </Link>
    </>
  )
}

export default ApartmentHome