var express = require('express');
var app = express();
var faker = require('faker');
var mysql = require('mysql');
var bodyParser  = require("body-parser");
var multer = require('multer');
var upload = multer({ dest: 'Images/' });

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

  //console.log(faker.internet.email());
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',     // your root username
  database : 'InstaBLAM',   // the name of your db
});

app.get("/", function(req, res){
   console.log('Cookies: ', req.cookies)
 var q = 'SELECT COUNT(*) as count FROM users';
 connection.query(q, function (error, results) {
 if (error) throw error;
 var count = results[0].count
 //var msg = "Welcome to the homepage! We have " + results[0].count + " users.";
 res.render("join_us",{data:count});
 });
});

app.post('/register', async function(req,res){
	const bcrypt = await require("bcrypt");
    hashedPassword = await bcrypt.hash(req.body.password, 10) // await hashed password

	// in the SQL statement, use the hashed Password
    var sqlstatement = "INSERT INTO users(first_name, last_name, username, password, email) VALUES('" + req.body.firstname + "', '" + req.body.lastname + "', '" + req.body.username + "', '" + hashedPassword + "', '" + req.body.email + "')"
 connection.query(sqlstatement, function(err, result) {
 console.log("The error, if any, is: " + err);
 console.log(result);
 res.redirect("/");
 });
});

app.get("/logged_in", function(req, res){
 res.render("logged_in");
});

app.get("/login", function(req, res){
 res.render("login");
});

app.post('/check_login', async function(req,res){
	const bcrypt = await require("bcrypt");// compare new hash of password with one stored in MySQL database
	Postres = res;
	Postreq = req;
    var sqlstatement = "SELECT password FROM users WHERE username in ('" + req.body.username + "')"
	CompPassword = await connection.query(sqlstatement, async function(err, res) {
		console.log("The error, if any, is: " + err);
		console.log("The password in the database is: " + res[0].password);
		ExistPW = res[0].password;
		bcrypt.compare(req.body.password, ExistPW, function(err, res) { //This function takes in the raw password (DO NO HASH IT), hashes it, then compares vs the database's hashed version of the password. DO NOT HASH THE PASSWORD BEFORE PASSING IT TO THE .compare METHOD!!
			if (err){
				console.log("The error, if any, is: " + err);
			  }
			if (res){
				console.log("It's a match!");
				Postres.cookie('profile', Postreq.body.username);
				Postres.redirect("/logged_in");
			  }
			else {
				console.log("Not a match!");
				console.log("The entered password is: " + hashedPassword);
				// response is OutgoingMessage object that server response http request
			  }
		});
	});
});

app.get("/new_photo", function(req, res){ //renders the photo upload page
 res.render("new_photo");

});

app.post("/photo_upload", upload.single('photo'), function (req, res, next, err) { //posts the image to the Images folder.
	console.log(req.file, req.body)
    	res.status(204).end();
	console.log("The error, if any, is: " + err);
});
 
app.listen(3000, function () {
 console.log('App listening on port 3000!');
});