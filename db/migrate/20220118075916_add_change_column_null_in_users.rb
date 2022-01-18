class AddChangeColumnNullInUsers < ActiveRecord::Migration[6.1]
  def change
    change_column_null :User, :username, false
  end
end
