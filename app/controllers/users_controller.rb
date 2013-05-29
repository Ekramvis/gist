class UsersController < ApplicationController
  before_filter :require_login
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])

    if @user.save
      redirect_to root_url
    else
      render :new
    end
  end
end