Rails.application.routes.draw do
  get 'rails/g'

  get 'rails/devise'

  get 'rails/user'

  devise_for :users
  root to: "messages#index"
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messeages, only: [:index, :create]
end
end