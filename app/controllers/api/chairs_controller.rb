class Api::ChairsController < ApplicationController
  def index
    @chairs = Chair.where.not(barber_id: nil).includes(:barber)
    render :index
  end

  def show
    @chair = Chair.find_by(id: params[:id])
    render :show
  end

  def edit
  end

  private
  def chair_params
    params.require(:chair).permit(:barber_id, :chair_name)
  end
end
