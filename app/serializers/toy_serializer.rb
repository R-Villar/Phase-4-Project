class ToySerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :brand, :image, :description
end
