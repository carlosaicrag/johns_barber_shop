class Api::HaircutsController < ApplicationController
    def index 
        @haircuts = Haircut.all
        @barbers = User.where(working: true)
        render :index
    end
end
