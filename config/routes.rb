Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }
  root 'posts#index'

  resources :posts, only: [:new, :create, :index]
end
