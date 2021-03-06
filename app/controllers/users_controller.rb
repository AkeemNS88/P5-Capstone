class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create, :show, :index]

    def index
        users = User.all
        render json: users
    end
    
        
    def show
        if current_user
            render json: current_user, include: :posts, status: :ok
        else
            render json: "Not authenticated", status: :unauthorized
        end
    end
    
    def update
        if current_user
            current_user.update!(user_params)
            render json: current_user, status: :ok
        end
    end
    
    def create
        user = User.create!(user_params)
            if user.valid?
                session[:user_id] = user.id
                render json: user, status: :created
            else
                render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end
    
        def destroy
            if current_user
            current_user.destroy
            head :no_content
        else
            render json: "User does not exist", status: :not_found
        end
    end
    
        private
    
        def user_params
            params.permit(:username, :password, :email, :posts, :avatar)
        end
    

end
