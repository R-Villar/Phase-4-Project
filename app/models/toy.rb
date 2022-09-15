class Toy < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    # validates :name, :price, :image, :brand, presence: true

end
