class ChangePhoneNumberInOwner < ActiveRecord::Migration[5.1]
  def change
    change_column :owners, :phone, :string
  end
end
