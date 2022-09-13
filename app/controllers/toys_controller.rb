class ToysController < ApplicationController

     #GET '/toys'
     def index
        render json: Toy.all, status: :ok
    end
   
    #GET '/toys/:id'
    def show
        render json: toy_id, status: :ok
    end

    private
    def toy_params
        params.permit(:name,:price,:brand,:image,:description)
    end

    def toy_id
        Toy.find(params[:id])
    end
    
end
