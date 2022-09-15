class User < ApplicationRecord
    has_many :reviews
    has_many :toys, through: :reviews

    has_secure_password

    # validates :email, :username, presence: true, uniqueness: true
    # validates :username, length: { in: 1..30 }
    # validates :password, length: { in: 1..20 }
    #using password doesn't work
  
   
end


