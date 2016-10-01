class UserStocksController < ApplicationController

  def create
    if params[:stock_id].present?
      @user_stock = UserStock.new(stock_id: params[:stock_id], user: current_user)
    else
      stock = Stock.find_by_ticker(params[:stock_ticker])
      if stock
        @user_stock = UserStock.new(user: current_user, stock: stock)
      else
        stock = Stock.new_from_lookup(params[:stock_ticker])
        if stock.save
          @user_stock = UserStock.new(user: current_user, stock: stock)
        else
          @user_stock = nil
          flash[:error] = "Stock is not available"
        end
      end
    end

    respond_to do |format|
      if @user_stock.save
        format.html { redirect_to my_portfolio_path, notice: "Stock was added" }
        format.json { render :show, status: :created, location: @user_stock}
      else
        format.html { render :new }
        format.json { render json: @user_stock.errors, status: :unprocessable_entity }
      end
    end
  end



end