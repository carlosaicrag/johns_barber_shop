class Api::ClientHaircutsController < ApplicationController
    def queue
        # debugger
        # @client_haircuts = ClientHaircut.where(barber_id: current_user.id).where(closed_at: [nil])
        @client_haircuts = ClientHaircut.where(barber_id: 45).where(closed_at: [nil]).order('created_at DESC') #for testing
        render :queue
    end
end
