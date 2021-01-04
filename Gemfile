ruby '2.7.1'
source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

# Core
gem 'render_async'
gem 'activerecord-typedstore'
gem 'bourbon'
gem 'browser'
gem 'devise'
gem 'gon'
gem 'interactor', '~> 3.0'
gem 'jbuilder'
gem 'js-routes'
gem 'mini_racer'
gem 'mjml-rails', '~> 4.3'
gem 'mysql2', '~> 0.4.4'
gem 'pagy', '~> 3.7.3'
gem 'puma', '~> 4.3'
gem 'rails', '~> 6.0.0'
gem 'slim-rails'
gem 'solid_assert'
gem 'uglifier', '>= 1.3.0'

# Views
gem 'redcarpet'

# Images
gem 'rqrcode'
gem 'fastimage'
gem 'file_validators'
gem 'image_processing', '~> 1.0'
gem 'ruby-vips'
gem 'selenium-webdriver'
gem 'unsplash'

# Assets
gem 'webpacker', '~> 5.2.1' # Uses webpack 4
gem 'bulma-rails', '~> 0.8.0'
# This has to match exactly with the NPM version in package.json
gem 'react_on_rails', '12.0.4'
gem 'sass-rails'
gem 'sassc'
gem 'sprockets', '~> 3.7.x'

gem 'breakpoint'
gem 'fast_blank'

gem 'local_time'
gem 'mini_magick'
gem 'oj'
gem 'rails_param'

# APIs
gem 'aws-sdk-s3'
gem 'google_url_shortener'
gem 'lob'
gem 'stripe'
gem 'http', require: false
gem 'discordrb'
gem 'etsy'

# Models
gem 'activerecord-import'
gem 'encryptor'
gem 'flag_shih_tzu'
gem 'friendly_id', '~> 5.2.4'
gem 'cancancan'
gem 'validate_url'

# Experimentation
gem 'flipper'
gem 'flipper-active_record'

# Monitoring
gem 'exception_notification'
gem 'rushover'

# Jobs
gem 'redis', '~> 3.3.3'
gem 'redis-namespace'
gem 'sidekiq'
gem 'sidekiq-scheduler', '~> 3.0'
gem 'sinatra', require: false

gem 'tty-spinner'
gem 'tty-prompt'
gem 'tty-option'
gem 'pry-byebug'
gem 'pry-rails'

group :test do
  gem 'factory_bot'
  gem 'vcr'
  gem 'webmock'
  gem 'database_cleaner'
end

group :development, :test do
  gem 'active_record_query_trace'
  gem 'awesome_print'
  gem 'byebug'
  gem 'flamegraph'
  gem 'memory_profiler'
  gem 'rspec-rails', '~> 4.0'
  gem 'rails-controller-testing'
  gem 'capybara-screenshot-diff'
  gem 'oily_png', platform: :ruby
end

group :development do
  gem 'fontello_rails_converter'
  gem 'guard'
  gem 'guard-rspec', require: false
  gem 'guard-livereload'
  gem 'letter_opener'
  gem 'listen', '~> 3.0.5'
  gem 'mina-nginx', require: false
  gem 'mina-puma', require: false
  gem 'mina-rsync', require: false
  gem 'mina-sidekiq', require: false
  gem 'mina'
  gem 'rack-livereload'
  gem 'rack-mini-profiler'
  gem 'rubocop-daemon', require: false
  gem 'rubocop-rails'
  gem 'rubocop', '~> 0.76.0'
  gem 'spring-commands-rspec'
  gem 'spring-watcher-listen'
  gem 'spring'
  gem 'stackprof'
  gem 'web-console', '>= 3.3.0'
end
