const mongoose = require("mongoose");
const announSchema = new mongoose.Schema({
    announce: {
        type:String,
        required: true
    }
})

const Announce= new mongoose.model('Announce',announSchema);
module.exports = Announce;