class UsersController < ApplicationController
    skip_before_action :authenticate_user #except: [:create, :show]

    def index 
        render json: User.all, status: :ok
    end

    def show 
        # user = find_user
        # render json: @current_user, status: :ok
        if current_user
            render json: current_user, status: :ok
        else
            render json:{ errors: "No current session stored"}, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private 

    def user_params
        params.permit(:icon, :username, :email, :password)

    end

    # def find_user
    #     User.find(params[:id])
    # end
end
