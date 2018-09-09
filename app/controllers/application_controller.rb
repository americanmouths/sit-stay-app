class ApplicationController < ActionController::API
  def issue_token(payload)
    JWT.encode(payload, "supersecretcode")
  end
end
