class Api::HaircutsController < ApplicationController
    def index 
        @haircuts = Haircut.all
        @barbers = Barber.where(working: true)
        render :index
    end
end
