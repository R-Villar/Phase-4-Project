class ToysController < ApplicationController
    skip_before_action :authenticate_user
    before_action :is_authorized?, only: :create
    
     #GET '/toys'
     def index
        render json: Toy.all, status: :ok
    end
   
    #GET '/toys/:id'
    def show
        render json: toy_id, status: :ok, serializer: ToyReviewsSerializer
    end

    #POST '/toys'
    def create
        toys = Toy.create!(toy_params)
        render json: toys, status: :created
    end

    private
    def toy_params
        params.permit(:name,:price,:brand,:image,:description)
    end

    def toy_id
        Toy.find(params[:id])
    end
    
end
