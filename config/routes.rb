Rails.application.routes.draw do
  get 'chairs/index'
  get 'chairs/show'
  get 'chairs/edit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: { format: :json } do
    resources :users, only: [:create, :show] do
      member do
        get :confirm_email
        get :new_pass_form
      end
    end
    post 'passwords/forgot', to: 'passwords#forgot'
    post 'passwords/:token/reset', to: 'passwords#reset'
    
    resource :session, only: [:create, :destroy]
    #you're working on creating the routes for the chair
    resources :chairs, only: [:index, :show, :edit]
  end
  
  root to: 'static_pages#root'
end
