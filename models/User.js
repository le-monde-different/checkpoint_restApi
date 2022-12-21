const mongoose = require ('mongoose');

const User = new mongoose.Schema({
    name : {
        type : String ,
        required : true 
    },
    
    age : {
        type : Number ,
        required : true 
    }
})

const userModel = mongoose.model ('User', User )
module.exports= userModel;