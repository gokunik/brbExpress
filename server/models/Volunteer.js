const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const Volunteer = new mongoose.model("Volunteer",VolunteerSchema);
module.exports = Volunteer;