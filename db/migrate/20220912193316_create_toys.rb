class CreateToys < ActiveRecord::Migration[6.1]
  def change
    create_table :toys do |t|
      t.string :name
      t.integer :price
      t.string :brand
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
