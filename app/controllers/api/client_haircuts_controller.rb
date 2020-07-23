class Api::ClientHaircutsController < ApplicationController
    def queue
        @current_barber = current_barber
        if @current_barber
            render :queue
        else
            render json: ["No Barber is signed in"], status: 404
        end
    end

    def create
        @client_haircut = ClientHaircut.new(client_haircut_params)
        @client_haircut.client_id = current_client_user.id
        haircut_id = params[:client_haircut][:haircut_id]
        barber_id = params[:client_haircut][:barber_id]
        @client_haircut_avg_time = ClientHaircutTime.avg_time(current_client_user.id,haircut_id,barber_id,client_haircut_params)

        @client_haircut_avg_time.client_id = current_client_user.id
        if ClientHaircut.client_already_in_a_queue?(current_client_user)
            render json: ["You are already in a barbers queue"], status: 402
        elsif @client_haircut.save and @client_haircut_avg_time.save
            render :show
        else
            render json: @client_haircut.errors.full_messages, status: 402
        end
    end

    def destroy 
        @client_haircut = ClientHaircut.find(params[:id])
        @client_haircut.destroy
        @barbers = Barber.where(working: true)
        render "api/barbers/index" 
    end

    def close_client_haircut
        @client_haircut = ClientHaircut.find_by(id: params[:id])
        @client_haircut.release_client
        ClientHaircutTime.update_avg(@client_haircut)
        Barber.change_working_status(current_barber)
        @client_haircuts = ClientHaircut.where(barber_id: current_barber.id).where(closed_at: [nil]).order('created_at ASC')
        render :queue
    end

    private 
    def client_haircut_params
        params.require(:client_haircut).permit(:barber_id,:haircut_id, :closed_at, :client_id)
    end
end
