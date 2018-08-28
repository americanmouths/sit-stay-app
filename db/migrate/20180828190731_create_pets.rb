class CreatePets < ActiveRecord::Migration[5.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.integer :age
      t.string :allergies
      t.string :medications
      t.string :gender
      t.string :color
      t.string :behavioral_issues
      t.integer :owner_id

      t.timestamps
    end
  end
end
