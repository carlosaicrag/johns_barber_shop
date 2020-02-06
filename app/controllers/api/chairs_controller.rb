class Api::ChairsController < ApplicationController
  def index
    @chairs = Chair.all.includes(:barber)
    render :index
  end

  def show
    @chair = Chair.find_by(id: params[:id])
<<<<<<< HEAD
=======
    render :show
>>>>>>> master
  end

  def edit
  end

  private
  def chair_params
    params.require(:chair).permit(:barber_id, :chair_name)
  end
end
