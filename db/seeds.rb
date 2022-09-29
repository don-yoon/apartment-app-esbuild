# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
apartments = [
  {
    street: "4 Privet Drive",
    city: "Little Whinging",
    state: "Surrey",
    manager: "Mr. Potter",
    email: "potter@example.com",
    price: 2000,
    bedrooms: 3,
    bathrooms: 2,
    pets: "yes",
    image:
      "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg"
  },
  {
    street: "15 Yemen Road",
    city: "Yemen",
    state: "Yemen",
    manager: "Mr. Bing",
    email: "bing@example.com",
    price: 1000,
    bedrooms: 3,
    bathrooms: 2,
    pets: "yes",
    image:
      "https://i.pinimg.com/736x/4f/c1/ce/4fc1ce196ea1412f670d477a026ba2c6--saudi-arabia-drawing-reference.jpg"
  },
  {
    street: "742 Evengreen Terrace",
    city: "Springfield",
    state: "Any State",
    manager: "Mr. Simpson",
    email: "simpson@example.com",
    price: 1000,
    bedrooms: 3,
    bathrooms: 2,
    pets: "yes",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/ca/742_Evergreen_Terrace.png"
  }
]

apartments.each do |apartment|
    Apartment.create(apartment)
end