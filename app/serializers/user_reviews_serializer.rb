class UserReviewsSerializer < ActiveModel::Serializer
  attributes :id, :icon, :username, :email
  has_many :reviews
end
