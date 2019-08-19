var localStrategy = require("passport-local").Strategy; 
var mongoose = require("mongoose"); 
var bcrypt = require("bcryptjs"); 

// User Model 
var User = require("../models/User"); 

// Export the strategy referenced above 
module.exports = function (passport) { 
    passport.use (
        new localStrategy ({ usernameField: "email" }, (email, password, done) => {
            // Check for user 
            User.findOne ({ email: email })
                .then (user => {
                    if (!user) {
                        return done (null, false, { message: "The email you entered is not registered."}); 
                    }

                    // Password comparison using bcrypt
                    bcrypt.compare(password, user.password, (err, isMatch) =>{
                        if (err) throw err; 

                        if (isMatch) {
                            return done(null, user); 
                        } else {
                            return done (null, false, { message: "Incorrect Password." })
                        }
                    }); 

                })
                .catch (err => console.log(err)); 
            })
    )
}