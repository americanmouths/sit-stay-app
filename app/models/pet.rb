class Pet < ApplicationRecord
  belongs_to :owner
  has_many :services
end
