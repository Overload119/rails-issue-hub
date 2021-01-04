# typed: strict
config = Rails.application.secrets.redis

Redis.current = Redis.new(config)
$redis = Redis.current

$redis.client.logger = Logger.new(STDOUT) if Rails.env.development?
