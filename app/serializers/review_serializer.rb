class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_review, :rating, :location
  has_one :user
  has_one :toy
end
