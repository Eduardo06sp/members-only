class User < ApplicationRecord
  has_many :posts

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, :email, :password, presence: true
  validates :username, :email, uniqueness: true

  validates :username, :email, uniqueness: true
  validates :username, length: { in: 4..12 }
  validates :password, length: { in: 6..30 }
end
