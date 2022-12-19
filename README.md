# Social Network API

## Description

This repository was create to test working with the NoSQL database MongoDB in combination with the ODM, Object Data Modeling, [Mongoose.js](https://mongoosejs.com/).

The application sets up the API routes for a social media network. The programmer can view all users, create users, view users individually, with the ability to update and delete users too. There is added functionality to add and remove friends from each user.

Users can post thoughts, which require a some text and the username of the creator. Reactions can be added to each thought, allowing for social interactions essential to the social networks. Thoughts have the same functionality as outlined in users, on the other hand reactions only have the additional ability to be removed.

## Future improvements

There is two known issues that I am yet to work out.

- Firstly the reactions Id's are defaulting to _id rather than the required reactionId key.
- Within the createdAt keys I was not able to format the timestamp. 

## Table of Contents
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technology](#technology)
  - [License](#license)
  - [Questions](#questions)

## Installation 
Before attempting to use this application, you must have the follow programs installed to your computer: 

  - VS Code
  - Node.js
  
  In the terminal of VS Code please install enter the following to install all dependencies: 
  ```bash
  npm install
  ```
[Express.js](https://expressjs.com/en/starter/installing.html)

## Usage

You can watch the demo here [Social Media Api](https://drive.google.com/file/d/1savCr5BRNdELmK4gPyKBOprpVHCa6YHP/view?usp=sharing)

Or 

 To use the application locally please clone the repo to your local environment.

 The application will be invoked by using the following command:

  ```bash
  node server.js
  ```
  Then in your API client, such as Insomnia or Postman, open http://localhost:3001

Refer to the various routes and make some requests.

Be sure to include a body for the post and put methods.

And includes the necessary ids in the route.

## Technology
Technologies used in this project are:
* Visual Studio Code
* HTML
* CSS
* Javascript
* Express
* Dotenv
* Date-fns
* MongoDB
* Mongoose

## License 
![License](https://img.shields.io/github/license/andrew60199/social-network-api-01)

# Questions

## Feel free to reach out if you have any enquiries

Andrew Beissmann:
* Email: andrew60199@gmail.com
* GitHub: [@andrew60199](https://github.com/andrew60199)
