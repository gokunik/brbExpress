const express = require("express");
const hbs = require("hbs");
const path = require("path");

require("./db/conn");    //Connection to mongodb Database

const app = express();
const port = process.env.PORT || 3000;

const templatePath = path.join(__dirname, "../templates/views");        // path for view
const partials = path.join(__dirname, "../templates/partials"); // path for partials

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,"../public")));
    
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partials);     
     
const WebRouter = require("./routers/router");
app.use(WebRouter);
  
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

