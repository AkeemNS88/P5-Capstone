class PostSerializer < ActiveModel::Serializer
  attributes :title, :content, :category_id, :id, :user_id
  # belongs_to :category
  belongs_to :user
end
