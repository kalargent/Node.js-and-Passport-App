var express =require ("express"); 
var router = express.Router(); 

router.get ("/login", req, res => res.send("LOGIN")); 

router.get ("/register", req, res => res.send("REGISTER")); 

module.exports = router; 