var express = require ("express"); 

var app = express (); 

//routes 
app.use('/', require('./routes/index')); 

var PORT= process.env.PORT || 5000; 

app.listen(PORT, console.log(`Server started on port ${PORT}.`))