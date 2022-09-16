class ReviewsController < ApplicationController
    skip_before_action :authenticate_user, except: :update
     
    #GET '/reviews'
    def index
        render json: Review.all, status: :ok
    end

    #POST '/reviews'
    def create
        reviews = Review.create!(review_params)
        render json: reviews, status: :created
    end

    #GET '/reviews/:id'
    def show
        render json: review_id, status: :ok
    end

    #PATCH '/reviews/:id'
    def update 
        reviews = review_id
        reviews.update!(review_params)
        render json: reviews, status: :accepted
    end

    #DELETE '/reviews/:id'
    def destroy
        reviews = review_id
        reviews.destroy
        head :no_content
    end

    private
    def review_params
        params.permit(:user_id, :toy_id, :title, :user_review, :rating, :location)
    end

    def review_id
        Review.find(params[:id])
    end
end
