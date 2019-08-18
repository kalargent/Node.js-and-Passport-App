var mongoose = require("mongoose"); 

var userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: True 
    }, 

    email: {
        type: String, 
        required: True
    }, 

    password: {
        type: String, 
        required: True 
    }, 

    date: {
        type: Date, 
        default: Date.now
    }

}); 

var User = mongoose.model("User", userSchema); 

module.exports = User; 