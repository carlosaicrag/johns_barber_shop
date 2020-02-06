class Api::HaircutsController < ApplicationController
    def index 
        @haircuts = Haircut.all
        render :index
    end
end
