class User < ApplicationRecord
    has_many :reviews
    has_many :toys, through: :reviews

    has_secure_password

    validates :email, presence: true, uniqueness: true
    validates :username, length: { in: 2..12 }
    # validates :password, length: { in: 6..20 }
end
