class UserSerializer < ActiveModel::Serializer
  attributes :username, :email, :avatar, :admin
  has_many :posts
end
