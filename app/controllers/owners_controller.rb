class OwnersController < ApplicationController
  has_many :pets
  has_many :addresses
end
