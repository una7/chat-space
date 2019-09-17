Rails.application.routes.draw do
  get 'rails/g'

  get 'rails/devise'

  get 'rails/user'

  devise_for :users
  root to: "messages#index"
end
