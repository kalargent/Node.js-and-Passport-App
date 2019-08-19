# Node.js and Passport  

I wanted to understand how to implement a simple Node.js and Passport Register and Login. I found this tutorial and followed it closely: 

[Click here to view the tutorial](https://www.youtube.com/watch?v=6FOq4cUdH8k "Named link title") 

This was my first real foray into a lot of the technologies I used, and I referenced their documentation heavily. New (to me) technologies are indicated with an asterisk. 

## Technologies Used 
* Node JS 
* Javascript 
* NPM Packages
    * bcryptjs*
    * connect-flash*
    * ejs* 
    * express
    * express-ejs-layouts*
    * express-session*
    * mongoose* 
    * passport* 
    * passport-local*
* Bootstrap
* Font Awesome
* Mongo DB (Clusters)* 

## Features 
* A main page that invites the user to Register or Login 
    * Register: User enters name, email, password, and confirms.
        * Upon submission: 
            * The app checks if the email already exists, 
            * If not, the app encrypts the user's password (salt and hash), and
            * Stores the users information in the DB
    * Login: User enters email and password
        * Upon submission: 
            * The app checks that the email is registered, 
            * If registered, compares the passwords, and 
            * If they match, the user is presented their dashboard
* A secured dashboard that only displays when the user is logged in
* A basic logout function 


## My Role 
I was the sole developer for this project. I did, however, spend many hour reviewing repos and videos for this project which means.... 
