class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :toy, null: false, foreign_key: true
      t.string :title
      t.string :user_review
      t.integer :rating
      t.string :location

      t.timestamps
    end
  end
end
