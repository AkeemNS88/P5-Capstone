class PostSerializer < ActiveModel::Serializer
  attributes :title, :content, :category_id
  # belongs_to :category
  # belongs_to :user
end
