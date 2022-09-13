class ToysController < ApplicationController

     #GET '/toys'
     def index
        render json: Toy.all, status: :ok
    end
   
end
