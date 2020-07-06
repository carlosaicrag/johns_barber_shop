class Api::ClientsController < ApplicationController
    def create
        @client = Client.new(client_params)
        if @client.save
            # SendEmailJob.set(wait: 0.5.seconds).perform_later(@barber.id)
            client_sign_in(@client)
            render 'api/clients/show'
            # render json: ["Please check your email (#{@barber.email})"]
        else
            render json: @client.errors.full_messages, status: 422
        end
    end

  def show
    @client = Client.find(params[:id])
  end

  def client_params
    params.require(:client).permit(:password, :email,:phone_num, :fname, :lname)
  end

end
