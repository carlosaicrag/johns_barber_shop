Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: { format: :json } do
    resources :haircuts, only: [:index]
    get 'queue' => "client_haircuts#queue"
    resources :users, only: [:index, :create, :show, :update] do
      member do
        get :confirm_email
        get :new_pass_form
      end
    end
    
    resources :clients, only: [:create, :show, :delete]
    resources :client_haircuts, only: [:create, :update]
    
    post 'passwords/forgot', to: 'passwords#forgot'
    post 'passwords/:token/reset', to: 'passwords#reset'
    
    resource :session, only: [:create, :destroy]
    resource :client_session, only: [:create, :destroy]
  end
  
  root to: 'static_pages#root'
end
