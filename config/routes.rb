Rails.application.routes.draw do
  resources :products
  resources :categories
  resources :users

  get '/auth/verify', to: 'users#verify'
  post '/auth/login', to: 'users#login'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
