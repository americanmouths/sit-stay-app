class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :city
      t.string :state
      t.integer :zipcode
      t.integer :owner_id

      t.timestamps
    end
  end
end
