const express = require("express");
const hbs = require("hbs") 
const path = require("path")

const app = express()
const port = process.env.PORT || 3000;

const templatePath = path.join(__dirname, "../templates/views");        // path for view
const partials = path.join(__dirname, "../templates/partials"); // path for partials


app.use(express.static('../public'));
    

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partials);     
     
// Website routes
app.get("/", (req, res) => {
    res.render("index")
}); 
                 
app.get("/newsfeed", (req, res) => {
    res.render("newsfeed")
}); 
  
app.get("/about", (req, res) => {
    res.render("about")
});
    
app.get("/contact", (req, res) => {
    res.render("contact")
});

app.get("/mission", (req, res) => {
    res.render("mission")
});  
app.get("/gallery", (req, res) => {
    res.render("imageGallery")
});  
   
app.get("*", (req, res) => {
    res.render("404")
});

  
  
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

