class Api::ClientHaircutsController < ApplicationController
    def queue
        @client_haircuts = ClientHaircut.where(barber_id: current_user.id).where(closed_at: [nil]).order('created_at DESC')
        render :queue
    end

    def create
        @client_haircut = ClientHaircut.new(client_haircut_params)
        @client_haircut.client_id = current_client_user.id
        client_haircut_avg_time = ClientHaircutTime.avg_time(current_client_user.id,params[:client_haircut][:haircut_id],
                                            params[:client_haircut][:barber_id])
        if client_haircut_avg_time.length == 0
            @client_haircut_avg_time = ClientHaircutTime.new(client_haircut_params)
        else
            @client_haircut_avg_time = client_haircut_avg_time[0]
        end
        @client_haircut_avg_time.client_id = current_client_user.id
        
        if @client_haircut.save and @client_haircut_avg_time.save
            render :show
        else
            render json: @client_haircut.errors.full_messages, status: 402
        end
    end

    def update 
        @client_haircut = ClientHaircut.find_by(id: params[:id])
        @client_haircut.release_client(params[:client_haircut][:closed_at])
        @client_haircuts = ClientHaircut.where(barber_id: current_user.id).where(closed_at: [nil]).order('created_at DESC')
        render :queue
    end

    private 
    def client_haircut_params
        params.require(:client_haircut).permit(:barber_id,:haircut_id, :closed_at, :client_id)
    end
end
