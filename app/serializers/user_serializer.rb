class UserSerializer < ActiveModel::Serializer
  attributes :id, :icon, :username, :email
end
