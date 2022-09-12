class Review < ApplicationRecord
  belongs_to :user
  belongs_to :toy

  validates :rating, numericality: {less_than_or_equal_to: 10}
  validates :title, length: { in: 5..15 }
  validates :user_review, length: { in: 5..250 }
 

end
