const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Banda-Roti-Bank", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database");
}).catch((e) => {
    console.log("No Connection ->", e);
})