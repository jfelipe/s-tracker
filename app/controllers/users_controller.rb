class UsersController < ApplicationController

  def my_portfolio
    @user = current_user
    @user_stocks = current_user.user_stocks
  end

  def my_friends

  end

end