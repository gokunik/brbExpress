const express = require("express");
const router = new express.Router();

// Website routes
router.get("/", (req, res) => {
    res.render("index")
}); 
                 
router.get("/newsfeed", (req, res) => {
    res.render("newsfeed")
}); 
  
router.get("/about", (req, res) => {
    res.render("about")
});
    
router.get("/contact", (req, res) => {
    res.render("contact")
});

router.get("/mission", (req, res) => {
    res.render("mission")
});  

router.get("/gallery", (req, res) => {
    res.render("imageGallery")
});  
   
router.get("*", (req, res) => {
    res.render("404")
});

module.exports = router;