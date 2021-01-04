redis: close_port 6379 redis-ser; redis-server
guard: bundle exec guard
wp-client: bin/webpack-dev-server
wp-server: SERVER_BUNDLE_ONLY=yes bin/webpack --watch
rails: sleep 3; spring rails s
