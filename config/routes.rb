Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :haircuts, only: [:index]
    get 'queue' => "client_haircuts#queue"
    resources :barbers, only: [:index, :create, :show, :update] do
      member do
        get :confirm_email
        get :new_pass_form
      end
    end
    
    resources :clients, only: [:create, :show]
    resources :client_haircuts, only: [:create, :update, :destroy] do 
      member do 
        patch :close_client_haircut
      end
    end
    
    post 'passwords/forgot', to: 'passwords#forgot'
    post 'passwords/:token/reset', to: 'passwords#reset'
    
    resource :client_session, only: [:create, :destroy]
  end
  
  root to: 'static_pages#root'
end
