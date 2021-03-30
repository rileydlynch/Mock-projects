var express = require('express');
var app = express();
var faker = require('faker');
var mysql = require('mysql');
var bodyParser  = require("body-parser");
var multer = require('multer');
var upload = multer({ dest: 'Images/' });
var JSON = require('JSON');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

  //console.log(faker.internet.email());
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',     // your root username
  database : 'InstaBLAM',   // the name of your db
});

function getcookie(req) {
	var precook = req.headers.cookie.replace(/=/g, ":");
	var cookie = precook.split(";");
    const final = cookie.reduce((a, c) => {
    const [property,value] = c.split(":")
    return {...a, [property.trim()]: value}
}, {});
	return final
};

// function getcookie(req) {
//     var precook = req.headers.cookie.replace(/=/g, ":");
//     var cookie = precook.split(";");
//     return cookie.reduce((a, c) => {
//       const [property, value] = c.split(":")
//       return {...a, property: value}
//     }, {});
// };

app.get("/", function(req, res){
 var cookie = getcookie(req);
 // var cookie = precookie.split(";");
 console.log(cookie);
 console.log("User is : "+ cookie.profile);
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

app.get("/cookiecheck", function(req, res){
	var cookie = getcookie(req);
	console.log(cookie.profile);
	});

app.get("/new_photo", function(req, res){
 res.render("new_photo");
});


app.post("/photo_upload", upload.single('photo'), function (req, res, next) {
	var selectedID; //to be used in a later MySQL query
	var cookie = getcookie(req); //Uses the pre-defined getcookie()
	console.log("User is : "+ cookie.profile); //confirming the username pulled from the cookie's 'profile' field
	var profname = cookie.profile; //puts 'profile' value into variable
	var filepath = req.file.filename + JSON.stringify(req.file.mimetype).substring(6,11); //puts file's path value into variable
	console.log(filepath); //double checks filepath value
    res.status(204).end();
	var sqlstatement = "SELECT id FROM users WHERE username = '" + profname + "'"; //takes out ID and puts into variable to be used in 2nd MySQL query
	connection.query(sqlstatement, function(err, res) {
	console.log("The error, if any, is: " + err);
	console.log("The User's ID is : " + res[0].id);
	selectedID = res[0].id;
		function photoinsert(id,path){ //had to create function to insert id & path in order to use the 'selectedID' variable as its value isn't global
			var sqlstatement = "INSERT INTO photos(user_id,image_path) VALUES('" + id + "','" + path + "')";

			connection.query(sqlstatement, function(err, result) {
			console.log("The error, if any, is: " + err);
			console.log(result);
			})};
		photoinsert(selectedID,filepath);
	});

});

app.listen(3000, function () {
 console.log('App listening on port 3000!');
});
