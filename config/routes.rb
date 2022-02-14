Rails.application.routes.draw do
  
  resources :posts
  resources :users
  resources :categories, only: [:index, :show]
  # Routing logic: fallback requests for React Router.

  get '/me', to: "users#show"

  get '/entries', to: "categories#show"

  patch '/edit', to: "posts#update"

  patch '/update', to: "users#update"

  post '/create', to: "posts#create"

  post '/signup', to: "users#create"

  post '/login', to: "sessions#login"

  delete '/logout', to: "sessions#destroy"

  delete '/delete', to: "users#destroy"

  delete '/remove', to: "posts#destroy"

  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
