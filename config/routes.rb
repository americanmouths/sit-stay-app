Rails.application.routes.draw do
  scope '/api' do
    resources :services
    resources :addresses
    resources :owners
    resources :pets
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
