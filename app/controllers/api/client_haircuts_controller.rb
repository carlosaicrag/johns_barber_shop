class Api::ClientHaircutsController < ApplicationController
    def queue
        # debugger
        @client_haircuts = ClientHaircut.where(barber_id: current_user.id).where(closed_at: [nil]).order('created_at DESC')
        render :queue
    end
end
