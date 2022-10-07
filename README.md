Apartment app

```zsh
$ rails new apartment-app-esbuild -d postgresql -T -j esbuild
$ bundle add rspec-rails
$ rails g rspec:install
$ rails db:create
$ bundle add devise
$ rails g devise:install
$ rails g devise User
$ rails g scaffold Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string image:text user:references --api
$ rails db:migrate
$ rails g controller app home
$ rails g stimulus react
```
Change in route.rb
```ruby
get '*path', to: 'app#home'
root 'app#home'
```
- Make sure to add instance variables you want to pass to the react side. (Devise works without adding here)
```ruby
class AppController < ApplicationController
  def home
    @apartments = Apartment.all.to_a.to_json
  end
end

```

- Change in views/app/home.html.erb
```ruby
<%= content_tag(:div, "", id:"app", data: {
    controller: "react",
    react_apartments_value: @apartments,
    react_user_value: {
       logged_in: user_signed_in?,
       current_user: current_user,
       new_user_route: new_user_registration_path,
       sign_in_route: new_user_session_path,
       sign_out_route: destroy_user_session_path
     }
})%>
```

Change in javascript/controllers/react_controller.js
```jsx
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
```

# Start
```zsh
bin/dev
```

# Heroku Deployment
make sure Procfile exists and inside add
```
web: bundle exec puma -t 5:5 -p ${PORT:-3000} -e ${RACK_ENV:-development}
```
link github repo to heroku
add node.js buildpack (ruby should already be added)
use heroku console to run
```zsh
rails db:migrate
rails db:seed
```
