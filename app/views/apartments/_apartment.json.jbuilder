json.extract! apartment, :id, :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image, :created_at, :updated_at
json.url apartment_url(apartment, format: :json)
