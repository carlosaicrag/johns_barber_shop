class Api::ClientHaircutsController < ApplicationController
    def queue
        # debugger
        @client_haircuts = ClientHaircut.where(barber_id: current_user.id).where(closed_at: [nil]).order('created_at DESC')
        render :queue
    end

    def create
        @client_haircut = ClientHaircut.new(client_haircut_params)
        @client_haircut.client_id = current_client_user.id
        
        if @client_haircut.save
            render json: "it worked!"
        else
            render json: @client_haircut.errors.full_messages, status: 402
        end
    end

    private 
    def client_haircut_params
        params.require(:client_haircut).permit(:barber_id,:haircut_id)
    end
end
