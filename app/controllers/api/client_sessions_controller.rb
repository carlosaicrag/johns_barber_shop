class Api::ClientSessionsController < ApplicationController
    def create
        @client = Client.find_by_credentials(
        params[:client][:email],
        params[:client][:password]
        )

        if @client
            client_sign_in(@client)
            render 'api/clients/show'
        else
            render json: ['Invalid credentials'], status: 422
        end
    end

    def destroy
        if client_signed_in?
            client_sign_out
            render json: {}
        else
            render json: ['Nobody singed in'], status: 404
        end
    end
end
