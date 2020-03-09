class Api::HaircutsController < ApplicationController
    def index 
        @haircuts = Haircut.all
        @barbers = User.all
        render :index
    end
end
