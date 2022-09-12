class UserSerializer < ActiveModel::Serializer
  attributes :id, :icon, :username, :email, :password_digest
end
