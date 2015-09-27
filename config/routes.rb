Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :jobs, only: [:index]
    end
  end

  match '*path', to: 'unfamiliar_requests#index', via: :all
end
