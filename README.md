# 18socialnetworkAPI

## Description

This project provides an API for a social media startup that aims to handle large amounts of unstructured data. The API utilizes a NoSQL database, specifically MongoDB, to efficiently manage and store the data.

## Acceptance Criteria

GIVEN a social network API  
WHEN I enter the command to invoke the application  
THEN my server is started and the Mongoose models are synced to the MongoDB database  
WHEN I open API GET routes in Insomnia for users and thoughts  
THEN the data for each of these routes is displayed in a formatted JSON  
WHEN I test API POST, PUT, and DELETE routes in Insomnia  
THEN I am able to successfully create, update, and delete users and thoughts in my database  
WHEN I test API POST and DELETE routes in Insomnia  
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation

To install and set up the project locally, follow these steps:

1 Clone the repository.
2 Install the necessary dependencies using the package manager of your choice.
3 Set up the environment variables for the database name, MySQL username, and password.
4 Run the necessary commands to create and seed the database.
5 Start the server to establish the connection between the back end and the database.

## Usage
Once the project is set up and the server is running, you can use a tool like Insomnia Core to test the functionality of the API. The API routes for categories, products, and tags should return the relevant data in a JSON format. Additionally, you can perform API POST, PUT, and DELETE requests to create, update, and delete data in the database.

## Technologies
The following technologies were used in the development of this project:

-Express.js
-Sequelize
-MySQL
-Insomnia Core
-JavaScript

## Resources

-Stack Overflow: A question and answer website used for troubleshooting and finding solutions to coding-related issues.
-Chat GPT: An AI language model used for generating responses and providing assistance during the development process.

## License
This project is licensed under the MIT License.