//jshint esversion:6

//import express module
const express = require("express");

//import bodyparser module
const bodyParser = require("body-parser");

//import ejs  module
const ejs = require("ejs");

//binding the express module to app
//creating a instance of express
const app = express();

// creating variable called post
let posts = []

//setting your view engine to ejs
app.set('view engine', 'ejs');


//cofigure bodyparse to read html requests
app.use(bodyParser.urlencoded({
  extended: true
}));


//telling express to include the public folder
app.use(express.static("public"));




//handeling a get request from home route
app.get("/", function(req, res) {

  //creating const called homeStartingContent
  const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

  // render list.ejs in your view folder
  // send homeStartingContent to that file to read
  res.render("home", {
    homeStartingContent: homeStartingContent,
    posts: posts
  });






});

//handeling a get request from about route
app.get("/about", function(req, res) {

  //creating const called aboutContent
  const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";

  // render about.ejs in your view folder
  // send about to that file to read
  res.render("about", {
    aboutContent: aboutContent
  });




});

//handeling a get request from contact route
app.get("/contact", function(req, res) {


  //creating const calle contactContent
  const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";


  // render contact.ejs in your view folder
  // send homeStartingContent to that file to read
  res.render("contact", {
    contactContent: contactContent
  });



});

//handeling a get request from compose route
app.get("/compose", function(req, res) {


  //creating const calle contactContent
  const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";


  // render contact.ejs in your view folder
  // send homeStartingContent to that file to read
  res.render("compose");



});


//handeling get request from /posts
app.get('/post/:posttitle', (req, res) => {
   console.log(req.params)


  for (const element of posts) {
    console.log(Object.values(element)[0])

}})




//HANDELING APP POST REQUEST from compose route
app.post("/compose", function(req, res) {



  //USE BODY BODYPARSER
  // ADD THE POST INFORMATION OF compose TO THE compose list

  //created post onbeject
  //capture data for http post request
  const post = {
    //capture data  from the form in the view/compose.EJS
    //data from input element with the name title
    title: req.body.title,

    //capture data  from the form in the view/compose.EJS
    //data from textarea element with the name postdata
    postdata: req.body.postdata,
  };

  //sending the post element to the global variable called posts
  posts.push(post)






  //Redrect to homeroute
  res.redirect("/");
});




app.listen(3000, function() {
  console.log("Server started on port 3000");
});
