import { Controller } from "@hotwired/stimulus"
import React from "react"
import { createRoot } from "react-dom/client"
import App from "../components/App"
import { BrowserRouter } from "react-router-dom"

// Connects to data-controller="react"
export default class extends Controller {
  static values = {
    apartments: String,
    user: Object
  }
  
  connect() {
    const apartments = JSON.parse(this.apartmentsValue)
    const user = this.userValue
    console.log("React controller connected!")
    console.log("prop test: ", apartments)
    App.defaultProps = {
      apartments: apartments,
      user: user
    }
    const app = document.getElementById("app")
    createRoot(app).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}
