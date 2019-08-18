var express =require ("express"); 
var router = express.Router(); 

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
        res.send("pass"); 
    }
})

module.exports = router; 