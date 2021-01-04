# typed: false
# Note: We use DigitalOcean which has a 1:1 mapping to Amazon S3 API.
config = YAML.load(File.read(Rails.root.join('config/storage.yml')))
amazon_config = config['amazon']
Aws.config[:s3] = {
  endpoint: amazon_config['endpoint'],
  region: amazon_config['region'],
  credentials:
    Aws::Credentials.new(
      amazon_config['access_key_id'],
      amazon_config['secret_access_key'],
    ),
  retry_limit: 0,
}
