class CreateOwners < ActiveRecord::Migration[5.1]
  def change
    create_table :owners do |t|
      t.string :phone
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :alternate_phone

      t.timestamps
    end
  end
end
