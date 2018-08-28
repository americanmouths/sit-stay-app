class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
      t.string :service_type
      t.time :duration
      t.date :date
      t.string :updates
      t.integer :owner_id
      t.string :important_info
      t.integer :pet_id

      t.timestamps
    end
  end
end
