class ToyReviewsSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :brand, :image, :description, :reviews
  has_many :reviews
end
