var express = require ("express"); 

var app = express (); 

//routes 
app.use("/", require("./routes/index")); 
app.use("/users", require("./routes/users")); 
// require("./routes/index")(app); 
// require("./routes/users")(app); 

var PORT= process.env.PORT || 5000; 

app.listen(PORT, console.log(`Server started on port ${PORT}.`))