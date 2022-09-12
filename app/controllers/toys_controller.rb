class ToysController < ApplicationController

    validates :name, :price, :brand, :image, :description presence: true
end
