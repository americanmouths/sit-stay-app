class PetsController < ApplicationController
  def index
    pets = Pet.all
    render json: pets, status: 200
  end
end
