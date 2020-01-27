class Api::ChairsController < ApplicationController
  def index
    @chairs = Chair.all.includes(:barber)
    render :index
  end

  def show
    @chair = Chair.find_by(id: params[:id])
    render :index
  end

  def edit
  end
end
