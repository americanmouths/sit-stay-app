class CreateOwners < ActiveRecord::Migration[5.1]
  def change
    create_table :owners do |t|
      t.integer, :phone
      t.string, :email
      t.string :alternate_phone

      t.timestamps
    end
  end
end
