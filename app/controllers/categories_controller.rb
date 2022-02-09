class CategoriesController < ApplicationController
    
    def index
        render json: Category.all
    end

    def show
        category = find_category
        render json: category
    end

private

    def find_category
        Category.find(params[:id])
    end

end
