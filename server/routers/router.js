const express = require("express");
const router = new express.Router();

const User = require("../models/User");  //User schema is called here
const Volunteer = require("../models/Volunteer"); //Volunteer Schema is called here  

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

//This function will register user/volunteer in our website and store their data in database.
router.post("/register",async(req,res) => {
    try {
        
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;