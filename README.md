## Exchange Web Application

A react redux and express web project.

#   Getting Started

#   Installing:

Install the required packages with that command at project directory:

    npm install

Install the required packages for client  with that command at client directory:

    cd client
    npm install 

#   Start:

To start and debug project run that that command at project directory:

     npm start 

Builds the client and server part concurrently and runs api in development mode. Open http://localhost:3006 to view it in the browser. 

To build client and server seperately: 

    For server: 
        npm run server

    For client:
        npm run client

#   Test:

To run server test cases, run that command at project directory:

    npm test

#   Deployment:

To prepare a deployment of project, run that command at project directory:

     npm run build

#   Code Overview

#   Dependencies:

- expressjs - to create server for handling and routing HTTP requests
- body-parser - to parse json requests
- helmet - for security
- axios - for making http requests
- expect, mocha, supertest: packages that are used to write test cases                      
- lodash - for managing array and objects
- react *, redux * : for creating a react application

#   Features:

- Get products from server
- Select a product and see prices in different exchanges

#   Application Structure:

- server.js -  this file defines our express server and  requires the routes we'll be using in the application. The entry point to our - application.
- config/ -  configuration variables for our server are contained in this folder
- controller/ -  the products controllers that get products and product prcies for our API are contained in this folder
- middleware/ - Middlewares that handle requests with data and validation rules for our post request are contained in this folder. Used middlewares are logMiddleware to log requests, and accessMiddleware for making requests from client to server.
- client/ - web client with reactjs framework is contained in this folder

#   API


## Get products  [GET] [/products]

returns all products shared between the exchanges

+ Response 200 (application/json)
        
            {
                productList: [
                    "BTC-BAT",
                    "BTC-BNT"
                    ..
                ]
            }


## Get products  [GET] [/products/PRODUCT/prices]

returns PRODUCT’s prices on all three exchanges

+ Response 200 (application/json)
        
            {
                productList: [
                    "BTC-BAT",
                    "BTC-BNT"
                    ..
                ]
            }

## Error Messages

+ Response 400 (application/json)
        
            {
                "message": "ProductId is not valid"
            }

+ Response 500 (application/json)
        
            {
                "message": "Internal server error"
            }

+ Response 404 Bad Request

        
            {
                "message": "Unable to get product Price Detail: INVALID_MARKET"
            }

#   License

This project is licensed under the MIT License 

#   Authors

Yusuf Yılmaz
