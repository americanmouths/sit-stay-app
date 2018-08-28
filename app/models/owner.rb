class Owner < ApplicationRecord
  has_many :pets
  has_many :addresses
  has_many :services
end
