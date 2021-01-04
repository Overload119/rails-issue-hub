# typed: strict
Mjml.setup do |config|
  config.template_language = :slim
  if Rails.env.development?
    config.beautify = true
    config.minify = false
  end
end
