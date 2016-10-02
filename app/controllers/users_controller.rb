class UsersController < ApplicationController

  def my_portfolio
    @user = current_user
    @user_stocks = @user.user_stocks
  end

end