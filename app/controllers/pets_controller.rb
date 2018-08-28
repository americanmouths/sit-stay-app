class PetsController < ApplicationController
  belongs_to :owner
  has_many :services
end
