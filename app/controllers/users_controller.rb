class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: :create
    #except: [:create,:show]

    #GET '/userss'
    def index 
        render json: User.all, status: :ok
    end

    #GET '/users/:id'
    def show 
        if current_user
            render json: current_user, status: :ok
            # serializer: UserReviewsSerializer
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
    


    
end