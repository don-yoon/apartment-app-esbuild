class AppController < ApplicationController
  def home
    @apartments = Apartment.all.to_a.to_json
  end
end
