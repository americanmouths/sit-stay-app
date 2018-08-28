class ChangeTypeToBreedInPets < ActiveRecord::Migration[5.1]
  def change
    rename_column :pets, :type, :breed
  end
end
