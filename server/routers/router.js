const express = require("express");
const router = new express.Router();

const User = require("../models/User");  //User schema is called here
const Volunteer = require("../models/Volunteer"); //Volunteer Schema is called here  
const Contact = require("../models/contactUs"); //Contact Us Schema is called here

// Website routes
router.get("/", (req, res) => {
    res.render("index",failed='');
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
        if(req.body.optradio == 'user'){
            const newUser = new User({
                name:req.body.name,
                phone:req.body.phone,
                email:req.body.email,
                password:req.body.password
            });
            const StoreUser = await newUser.save();
            console.log(newUser);
            res.render("index");
        } else if(req.body.optradio == 'volunteer'){
            const newVolunteer = new Volunteer({
                name:req.body.name,
                phone:req.body.phone,
                email:req.body.email,
                password:req.body.password
            });
            const StoreVolunteer = await newVolunteer.save();
            console.log(newVolunteer);
            res.render("index");
        } else {
            res.status(400).send("Bad request");
        }
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/login', async(req, res) => {
    try {

        console.log(req.body);
        const uemail = await User.findOne({email:req.body.email});
        if(!uemail){
            const vemail =  await Volunteer.findOne({email:req.body.email});
            if(req.body.password === vemail.password){
                res.send("http://localhost:3000/newsfeed");
            }else{
               res.send("invalid");
            }
        }else{
        if(req.body.password === uemail.password){
            res.send("http://localhost:3000/newsfeed");
        }else{
            res.send("invalid");
        }
     } 
    } catch (e) {
       res.send("invalid");
    }
});

//This route is for storing the contact us form info to database.
router.post("/contactUs",async(req,res) => {
    try {
        const newContact = new Contact({
            name:req.body.senderName,
            email:req.body.senderEmail,
            phone:req.body.senderContact,
            message:req.body.message
        });
        const saveContact = await newContact.save();
        console.log(newContact);
        res.send("submitted");
    } catch (e) {
        res.send("submittted");
    }
})

module.exports = router;