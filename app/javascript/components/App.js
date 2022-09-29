import React, { useState } from "react"
import { Navigate, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import ApartmentHome from "./pages/ApartmentHome"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentShow from "./pages/ApartmentShow"


const App = (props) => {
  const { apartments, user } = props
  const [login, setLogin] = useState(user.logged_in)
  
  return (
    <>
      <h1>React App</h1>
      <Header user={user} setLogin={setLogin}/>
      <Routes>
        <Route exact path="/" element={<ApartmentHome/>} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
        <Route path ="/apartmentshow" element={<ApartmentShow/>} />
      </Routes>
    </>
  )
}

export default App