class Api::ClientHaircutsController < ApplicationController
    def queue
        # @client_haircuts = ClientHaircut.where(barber_id: current_user.id).where(closed_at: [nil])
        @client_haircuts = ClientHaircut.where(barber_id: 9).where(closed_at: [nil])
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
