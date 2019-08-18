var express =require ("express"); 
var router = express.Router(); 

// adding in the user model 
var User = require("../models/User"); 

// adding in bcrypt

var bcrypt = require("bcryptjs"); 

router.get ("/login", (req, res) => res.render("login")); 

router.get ("/register", (req, res) => res.render("register")); 

// Router POST 

router.post("/register", (req, res) => {
    // testing 
    // console.log(req.body); 
    // res.send("hello"); 

    var { name, email, password, password2 } = req.body; 
    var errors = []; 

    //check required fields 
    if (!name || !email || !password || !password2) {
        errors.push({ msg: "Please fill in all fields." }); 
    }

    // check for password match 
    if (password !== password2) {
        errors.push({ msg: "Passwords do not match." });
    }

    //check pass length 
    if (password.length < 6) {
        errors.push({ msg: "Password must be 6 or more characters." });
    }

    if (errors.length > 0) {
        res.render("register" , {
            errors, 
            name, 
            email, 
            password, 
            password2
        })
    } else {
        // Validation passed 
        console.log ("you're in else"); 
        User.findOne({ email: email }) 
            .then (user => {
                if (user) {
                    errors.push({ msg: "Email already in use!"});
                    // user exists 
                    res.render("register", {
                        errors, 
                        name, 
                        email, 
                        password, 
                        password2
                    }); 
                } else {
                    var newUser = new User({
                        name, 
                        email, 
                        password
                    }); 
                    
                    console.log(newUser); 
                    res.send("new user"); 
                }
            }); 
        } 

})

module.exports = router; 