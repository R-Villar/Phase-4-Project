class Review < ApplicationRecord
  belongs_to :user
  belongs_to :toy

  validates :rating, numericality: true
  # validates : length: { in: 2..12 }
end
