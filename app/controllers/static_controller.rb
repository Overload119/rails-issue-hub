class StaticController < ApplicationController
  def index
    render :index
  end

  def another_page
    render :another_page
  end
end
