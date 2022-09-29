Rails.application.routes.draw do
  resources :apartments
  get '*path', to: 'app#home', constraints: ->(request){ request.format.html? }
  root 'app#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
