[![Build Status](https://travis-ci.org/akpante3/turing-app.svg?branch=develop)](https://travis-ci.org/akpante3/turing-app)

# e-commerce-React

e-commerce-app


## Vision
Create a store that allows users to place an order for the Tshirt of their choice

### The application can be found [**here**](https://e-commerce-clothing.herokuapp.com/)


## Getting Started

### Prerequisites
* Ensure [**Node JS**](https://nodejs.org/en/) is installed.
* Clone the [**repository here**](https://github.com/akpante3/turing-app.git)
* Navigate to the project directory `cd  my-app`
* Run `npm install` on the terminal to install dependecies

### Starting the app
* Run `npm run dev-server` on the terminal to start the app on development mode


### Testing
* Run `npm run test` on the terminal

## Features

TshirtShop consists of the following features:

### Authentication
* It uses JSON Web Token (JWT) for authentication.
* Token is generated on user signup/login.

### Unauthenticated Users
* Unauthenticated users can view all items
* Unauthenticated users can view a single item

### Authenticated Users
* Authenticated users can add item to cart
* Authenticated users can view items in the cart
* Authenticated users can pay for items in the cart.

### Payment system
* Stripe test mode payment was integrated into the application
