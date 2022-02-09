class PostsController < ApplicationController
     
    def index
        render json: Post.all
    end

    def show
        post = find_post
        render json: post, include: ['title', 'content']
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = find_post
        post.update!(post_params)
        render json: post
    end

    def destroy
        post.destroy
        head :no_content
    end

    private

    def post_params
        params.permit(:title, :content)
    end

    def record_not_found
        render json: {error: "Post not found"}, status: 404
    end

    def find_post
        Post.find(params[:id])
    end
end
