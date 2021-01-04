# typed: strict
require 'sidekiq/web'
require 'sidekiq-scheduler/web'

Rails
  .application
  .routes
  .draw do
    mount Sidekiq::Web => '/sidekiq'

    root to: 'static#index'
    get '/another_page' => 'static#another_page'
  end
