Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: { format: :json } do
    resources :haircuts, only: [:index]
    
    resources :users, only: [:index, :create, :show] do
      member do
        get :confirm_email
        get :new_pass_form
      end
    end
    
    resources :clients, only: [:create, :show, :delete]

    post 'passwords/forgot', to: 'passwords#forgot'
    post 'passwords/:token/reset', to: 'passwords#reset'
    
    resource :session, only: [:create, :destroy]
    resource :client_session, only: [:create, :destroy]
  end
  
  root to: 'static_pages#root'
end
