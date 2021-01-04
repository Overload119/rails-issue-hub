# typed: strict
if Rails.env.development?
  require 'byebug/core'

  # puts "BYEBUG: Starting remote debugger..."
  # Byebug.start_server 'localhost', 3001
  # puts "BYEBUG: Remote debugger on port 3001"

  # Connect:
  # byebug -R localhost:3001
end
