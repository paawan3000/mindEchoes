const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
    name:{
        type:String
    },
    googleId:{
        type:String
    },
    email:{
        type: String,
        // required:true,
    },
    style:{
        type: String,
    }

   
})

userSchema.plugin(passportLocalMongoose);



module.exports = mongoose.model('User', userSchema);