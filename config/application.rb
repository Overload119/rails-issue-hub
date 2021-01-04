# typed: strict
require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Testapp
  class Application < Rails::Application
    config.generators do |g|
      g.hidden_namespaces << :test_unit << :erb
      g.test_framework(nil)
      g.template_engine(:slim)
    end

    config.autoload_paths << "#{Rails.root}/lib"
    config.autoload_paths << "#{Rails.root}/lib/scripts"
    config.active_storage.variant_processor = :vips

    config.load_defaults = '6.0'
  end
end
