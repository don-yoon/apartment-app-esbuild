import React from "react"
import { Link } from "react-router-dom"
import Card from "../components/Card"

const ApartmentIndex = ({apartments}) => {
  return (
    <>
      <div className="text-3xl">
        ApartmentIndex
      </div>
      <div className="text-lg text-blue-700">
        <Link to="/apartmentnew">
          Create new apartments
        </Link>
      </div>

      <div className="flex">
        <Card apartments={apartments}/>
      </div>
    </>
  )
}

export default ApartmentIndex 