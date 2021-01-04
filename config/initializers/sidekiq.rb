# typed: ignore
Sidekiq.configure_server do |config|
  config.redis = Rails.application.secrets.redis

  config.on(:startup) do
    Sidekiq.schedule =
      YAML.load_file(Rails.root.join('config', 'scheduler.yml'))
    SidekiqScheduler::Scheduler.instance.reload_schedule!
  end

  config.error_handlers << proc do |ex, _ctx_hash|
    puts "An exception occured: #{ex}."
    ExceptionNotifier.notify_exception(ex)
  end
end

Sidekiq.configure_client do |config|
  config.redis = Rails.application.secrets.redis
end

# Perform Sidekiq jobs immediately in development,
# so you don't have to run a separate process.
# You'll also benefit from code reloading.
if Rails.env.development?
  require 'sidekiq/testing'
  Sidekiq::Testing.inline!
end
