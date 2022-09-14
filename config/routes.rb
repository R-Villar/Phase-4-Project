Rails.application.routes.draw do
  
  resources :reviews
  resources :toys
  resources :users, only: [:index, :show, :create]

  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"
  get "/toys/:id", to: "session#show"
  get "/me", to: "users#show"
  delete '/logout', to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
