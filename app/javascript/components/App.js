import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import ApartmentHome from './pages/ApartmentHome'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'


const App = (props) => {
  const { apartments } = props
  return (
    <>
    {/* <BrowserRouter> */}
    <h1>React App</h1>
    <Header/>
    <Routes>
        <Route exact path="/" element={<ApartmentHome/>} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
        <Route path ="/apartmentshow" element={<ApartmentShow/>} />
    </Routes>
    {/* </BrowserRouter> */}
    </>
  )
}

export default App