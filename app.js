var express = require ("express"); 
var expressLayouts = require("express-ejs-layouts"); 
var app = express (); 
var mongoose = require("mongoose"); 
var flash = require("connect-flash"); 
var session = require("express-session"); 

//DB Config
var db = require("./config/keys").MongoURI; 

//Connect to mongo 
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("mongo is connected...."))
    .catch (err => console.log(err)); 

//ejs 
app.use(expressLayouts); 
app.set("view engine", "ejs"); 

//body parser 
app.use(express.urlencoded({ extended: false })); 

// express session 
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

//connect.flash
app.use(flash()); 

// global vars (for connect-flash)

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg'); 
    res.locals.error_msh = req.flash('error_msg'); 
    next(); 
})

//routes 
app.use("/", require("./routes/index")); 
app.use("/users", require("./routes/users")); 



var PORT= process.env.PORT || 5000; 

app.listen(PORT, console.log(`Server started on port ${PORT}.`))