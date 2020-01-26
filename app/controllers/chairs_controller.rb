class ChairsController < ApplicationController
  def index
    chairs = Chair.all

    render :index
  end

  def show
    chair = Chair.find_by(id: params[:id])
    render :index
  end

  def edit
  end
end
