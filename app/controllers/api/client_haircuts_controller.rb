class Api::ClientHaircutsController < ApplicationController
    def queue
        # debugger
        # @client_haircuts = ClientHaircut.where(barber_id: current_user.id).where(closed_at: [nil])
        @client_haircuts = ClientHaircut.where(barber_id: 9).where(closed_at: [nil])
        render :queue
    end
end
