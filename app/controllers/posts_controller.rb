class PostsController < ApplicationController
    before_action :find_post, only: [:show, :update, :destroy]
    before_action :is_authorized, only: [:update, :destroy]
    def index
        render json: Post.all
    end

    def show
        render json: @post, include: ['title', 'content']
    end

    def create
        # post = Post.create!(post_params)
        post = current_user.posts.build(post_params)
        post.save!
        render json: post, status: :created
    end

    def update
        @post.update!(post_params)
        render json: post
    end

    def destroy
        @post.destroy
        head :no_content
    end

    private

    def post_params
        params.require(:post).permit(:title, :content, :category_id)
    end

    def is_authorized
        permitted = current_user.admin? || @post.user_id == current_user
        render json: {error: "Accessibility is not permitted"}, status: :forbidden unless permitted
    end

    def record_not_found
        render json: {error: "Post not found"}, status: 404
    end

    def find_post
        @post = Post.find_by_id(params[:id])
    end
end
