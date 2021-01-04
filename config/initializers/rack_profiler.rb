# typed: strict
if Rails.env.development?
  Rack::MiniProfiler.config.position = 'bottom-right'
  Rack::MiniProfiler.config.start_hidden = true
  Rack::MiniProfiler.config.auto_inject = false
end
