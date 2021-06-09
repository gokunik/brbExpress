const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");


const User = require("../models/User");  //User schema is called here
const Volunteer = require("../models/Volunteer"); //Volunteer Schema is called here  
const Contact = require("../models/contactUs"); //Contact Us Schema is called here
const Announce = require("../models/announ");//Announcement Schema


//Initiating mailing Service 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: 'krpalashish842@gmail.com',
        pass: 'axleblaze842'
    }
})

// Website routes
router.get("/", (req, res) => {
    res.render("index", 
    {
        title:"Banda Roti Bank"
    });
});

router.get("/newsfeed", async (req, res) => {
    try {
        const anno = await Announce.find({}).sort({ _id: -1 }).limit(1);
        res.render("newsfeed", { data: anno,
        title:"Newsfeed | Banda Roti Bank" });
    } catch (e) {
        console.log("Error!!");
    }
});

router.get("/about", (req, res) => {
    res.render("about", 
    {
        title:"About | Banda Roti Bank"
    })
});

router.get("/contact", (req, res) => {
    res.render("contact", 
    {
        title:"Contact | Banda Roti Bank"
    })
});

router.get("/mission", (req, res) => {
    res.render("mission", 
    {
        title:"Mission | Banda Roti Bank"
    })
});

router.get("/gallery", (req, res) => {
    res.render("imageGallery", 
    {
        title:"Gallery | Banda Roti Bank"
    })
});


// // routes for admin panel
// router.get("/admin-login", (req, res) => {
//     res.render("./admin/adminLogin")
// });

// router.get("/dashboard", (req, res) => {
//         res.render("./admin/dashboard")
// });


// router.get("/admin-users", async (req, res) => {
//         try {
//             const usern = await User.find({}).sort({ _id: -1 }).limit(3);
//             res.render("./admin/users", { us1: usern });
//         } catch (error) {
//             console.log(error);
//         }
// });

// router.post("/values",async(req,res) => {
//     try {
//         if(req.body.opt == "Users") {
//         const usern = await User.find({}).sort({ _id: -1 }).limit(3);
//         res.render("./admin/users", { us1: usern });
//         } else if(req.body.opt == "Volunteers") {
//             const userv = await Volunteer.find({}).sort({ _id: -1 }).limit(3);
//             res.render("./admin/users", { us1: userv });  
//         } else {
//             const usern = await User.find({}).sort({ _id: -1 }).limit(3);
//             res.render("./admin/users", { us1: usern });
//         }
//     } catch (e) {
//         console.log(e);
//     }
// })

// router.get("/admin-newsfeed", async (req, res) => {

//         try {
//             const anno = await Announce.find({}).sort({ _id: -1 }).limit(3);
//             res.render("./admin/newsfeed", { d: anno });
//         } catch (e) {
//             console.log("Error!!");
//         }


// });

// //Function for loading all announcements
// router.get("/allannounce", async (req, res) => {

//         try {
//             const allann = await Announce.find({});
//             res.render("./admin/newsfeed", { d: allann });
//         } catch (e) {
//             console.log(e);
//         }

// })

// router.get("/admin-contact", async (req, res) => {

//         const names = await Contact.find({}).sort({ _id: -1 }).limit(5);
//         res.render("./admin/contact", { nam: names })

// });


// router.get('/allmsg', async (req, res) => {

//         const allmsg = await Contact.find({});
//         res.render("./admin/contact", { nam: allmsg });

// });

// router.get("*", (req, res) => {
//     res.render("404")
// });

// //This function will register user/volunteer in our website and store their data in database.
// router.post("/register", async (req, res) => {
//     try {
//         User.findOne({ email: req.body.email }, function (err, user) {
//             if (err) {
//                 console.log(err);//handle error here
//             }
//             //if a user was found, that means the user's email matches the entered email
//             if (user) {
//                 res.json("Email already exists as user");
//             } else {
//                 Volunteer.findOne({ email: req.body.email }, function (err, usere) {
//                     if (err) {
//                         console.log(err);
//                     }
//                     if (usere) {
//                         res.json("Email already exists as volunteer");
//                     } else {
//                         //code if no user with entered email was found
//                         if (req.body.optradio == 'user') {
//                             const newUser = new User({
//                                 name: req.body.name,
//                                 phone: req.body.phone,
//                                 email: req.body.email,
//                                 password: req.body.password
//                             });
//                             const StoreUser = newUser.save();
//                             userLogin = true;
//                             console.log(newUser);
//                             userdetails = newUser;
//                             res.redirect("/newsfeed");


//                             //Sending email to registered emailId
//                             transporter.sendMail({
//                                 from: 'krpalashish842@gmail.com',
//                                 to: req.body.email,
//                                 subject: 'Test Mail',
//                                 text: 'Welcome to Banda Roti Bank Revolution'
//                             }, (error, response) => {
//                                 if (error)
//                                     console.log('Error', error);
//                                 else
//                                     console.log('Mail sent, ', response);
//                             })


//                         } else if (req.body.optradio == 'volunteer') {
//                             const newVolunteer = new Volunteer({
//                                 name: req.body.name,
//                                 phone: req.body.phone,
//                                 email: req.body.email,
//                                 password: req.body.password
//                             });
//                             const StoreVolunteer = newVolunteer.save();
//                             userLogin = true;
//                             userdetails = newVolunteer
//                             console.log(newVolunteer);
//                             res.redirect("/newsfeed");

//                             //Sending email to registered emailId
//                             transporter.sendMail({
//                                 from: 'krpalashish842@gmail.com',
//                                 to: req.body.email,
//                                 subject: 'Test Mail',
//                                 text: 'Welcome to Banda Roti Bank Revolution'
//                             }, (error, response) => {
//                                 if (error)
//                                     console.log('Error', error);
//                                 else
//                                     console.log('Mail sent, ', response);
//                             })

//                         } else {
//                             res.status(400).send("Bad request");
//                         }

//                     }
//                 })
//             }

//         })
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

// router.post('/login', async (req, res) => {
//     try {

//         console.log(req.body);
//         const uemail = await User.findOne({ email: req.body.email });
//         if (!uemail) {
//             const vemail = await Volunteer.findOne({ email: req.body.email });
//             if (req.body.password === vemail.password) {
//                 userLogin = true;
//                 userdetails = vemail;
//                 res.send("http://localhost:3000/newsfeed");
//             } else {
//                 res.send("invalid");
//             }
//         } else {
//             if (req.body.password === uemail.password) {
//                 userLogin = true;
//                 userdetails = uemail
//                 res.send("http://localhost:3000/newsfeed");
//             } else {
//                 res.send("invalid");
//             }
//         }
//     } catch (e) {
//         res.send("invalid");
//     }
// });

// //This route is for storing the contact us form info to database.
// router.post("/contactUs", async (req, res) => {
//     try {
//         const newContact = new Contact({
//             name: req.body.senderName,
//             email: req.body.senderEmail,
//             phone: req.body.senderContact,
//             message: req.body.message
//         });
//         const saveContact = await newContact.save();
//         res.send("saved");
//         console.log(newContact);
//     } catch (e) {
//         console.log(e);
//     }
// });

// //Storing the announcement from admin portal to database 
// router.post('/anno', async (req, res) => {
//     try {
//         const newAnn = new Announce({
//             announce: req.body.announ
//         });
//         const saveAnnoun = await newAnn.save();
//         res.send("added");
//     } catch (e) {
//         console.log(e);
//     }
// });

// //this function is for admin login page validation
// router.post("/admin", async (req, res) => {

//     try {
//         if (req.body.username === "axle" && req.body.password === "abc") {
//             adminLogin = true;
//             res.send("valid")
//         } else {
//             res.send("invalid");
//         }
//     } catch (e) {
//         console.log("invalid");
//     }
// })
// router.post("/adminLogout", async (req, res) => {
//     adminLogin = false;
//     res.redirect("/admin-login");
// })

// router.post("/userLogout", async (req, res) => {
//     userLogin = false;
//     userdetails = undefined;
//     res.redirect("/")
// })

module.exports =
    { router };