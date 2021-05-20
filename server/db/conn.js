const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://axle:blaze@cluster0.aa0pg.mongodb.net/Banda-Roti-Bank?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database");
}).catch((e) => {
    console.log("No Connection ->", e);
})