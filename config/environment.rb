# typed: strict
# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# This allows us to use url_for anywhere.
Rails.application.routes.default_url_options =
  Testapp::Application.config.action_mailer.default_url_options
