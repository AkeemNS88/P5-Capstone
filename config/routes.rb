Rails.application.routes.draw do
  
  resources :posts
  resources :users
  resources :categories, only: [:index, :show]
  # Routing logic: fallback requests for React Router.

  get '/me', to: "user#show"

  patch '/edit', to: "post#update"

  patch '/update', to: "user#update"

  post '/create', to: "post#create"

  post '/login', to: "sessions#login"

  delete '/logout', to: "sessions#destroy"

  delete '/delete', to: "user#destroy"

  delete '/remove', to: "post#destroy"

  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
