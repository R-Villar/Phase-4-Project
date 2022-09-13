class UsersController < ApplicationController

    def index 
        render json: User.all, status: :ok
    end

    def show 
        user = find_user
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private 

    def user_params
        params.permit(:icon, :username, :email, :password)

    end

    def find_user
        User.find(params[:id])
    end
end
