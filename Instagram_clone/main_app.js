var express = require('express');
var app = express();
var fs = require('fs')
var mysql = require('mysql2');
var bodyParser  = require("body-parser");
var multer = require('multer');
var upload = multer({ dest: 'Images/' });
var JSON = require('JSON');
var xml2js = require('xml2js');
var parseString = xml2js.parseString;
var xml = "<root>Hello xml2js!</root>";
const axios = require('axios');

var appRoot = process.env.PWD;


function getcookie(req) {
	var precook = req.headers.cookie.replace(/=/g, ":");
	var cookie = precook.split(";");
    const final = cookie.reduce((a, c) => {
    const [property,value] = c.split(":")
    return {...a, [property.trim()]: value}
}, {});
	return final
};

async function getnav() {
	var filedat = await fs.readFileSync(appRoot + '/navbar.html', "utf8", function(err, data) {	
		return data;
	});
	return filedat;
};

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

  //console.log(faker.internet.email());
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',     // your root username
  database : 'InstaBLAM',   // the name of your db
});

app.get("/", async function(req, res){
 var navdata = await getnav();
 var cookie = getcookie(req);
 // var cookie = precookie.split(";");
 console.log(cookie);
 console.log("User is : "+ cookie.profile);
 var q = 'SELECT COUNT(*) as count FROM users';
 connection.query(q, function (error, results) {
 if (error) throw error;
 var count = results[0].count
 //var msg = "Welcome to the homepage! We have " + results[0].count + " users.";
 res.render("join_us",{data:count,navidata:navdata});
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

app.get("/logged_in", async function(req, res){
	var navdata = await getnav();
	res.render("logged_in", {data:navdata});
});

app.get("/login", async function(req, res){
	var navdata = await getnav();
	res.render("login", {data:navdata});
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

app.get("/api_examples", async function(req, res){
	var navdata = await getnav(); 
	res.render("API_Examples", {data:navdata});
});

app.post("/wb_api_call", function(req, res){
 	var xmldir = "http://api.worldbank.org/v2/country/" + req.body.region + "/indicator/SP.POP.TOTL?date=" + req.body.year;
	axios.get(xmldir)
		.then(response => {
			var axres = response.data;
			parseString(axres, function (err, result) {
				var popvar = Number(result['wb:data']['wb:data'][0]['wb:value'])
				console.log("The population size of the " + result['wb:data']['wb:data'][0]['wb:country'][0]._ + " region was " + popvar.toLocaleString() + " in " + result['wb:data']['wb:data'][0]['wb:date'] + ".");
				res.send("The population size of the " + result['wb:data']['wb:data'][0]['wb:country'][0]._ + " region was " + popvar.toLocaleString() + " in " + result['wb:data']['wb:data'][0]['wb:date'] + ".");
			});
		});
});

app.post("/nasa_api_call", function(req, res){
	var apires = res;
	var gsvar = req.body.groundstation;
	var xmls='<soap:Envelope xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns:wsp="http://www.w3.org/ns/ws-policy" xmlns:wsp1_2="http://schemas.xmlsoap.org/ws/2004/09/policy" xmlns:wsam="http://www.w3.org/2007/05/addressing/metadata" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://ssc.spdf.gsfc.nasa.gov/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://schemas.xmlsoap.org/wsdl/" targetNamespace="http://ssc.spdf.gsfc.nasa.gov/" name="SatelliteSituationCenterService" > <soap:Body> 	<tns:getAllGroundStations>1</tns:getAllGroundStations></soap:Body></soap:Envelope>';

	axios.post('https://sscweb.gsfc.nasa.gov/WS/ssc/2/SatelliteSituationCenterService?wsdl',
			   xmls,
			   {headers:
				 {'Content-Type': 'text/xml'}
			   }).then(res=>{
				parseString(res.data, async function (err, result) {
					var nasaobj = result['S:Envelope']['S:Body'][0]['ns2:getAllGroundStationsResponse'][0]['return'].find(x => x.id == gsvar);
					apires.send("The " + nasaobj.name + " ground station is located at latitude " + nasaobj.latitude + " and longitude " + nasaobj.longitude + ".");
					console.log("The " + nasaobj.name + " ground station is located at latitude " + nasaobj.latitude + " and longitude " + nasaobj.longitude + ".");
					});
				}).catch(err=>{console.log(err)});
	
});

app.get("/new_photo", async function(req, res){
	var navdata = await getnav();
	res.render("new_photo", {data:navdata});
});

app.post("/photo_upload", upload.single('photo','tags'), function (req, res, next) {
	console.log("Tags are: " + req.body.tags);
	var selectedID; //to be used in a later MySQL query
	var cookie = getcookie(req); //Uses the pre-defined getcookie()
	console.log("User is : "+ cookie.profile); //confirming the username pulled from the cookie's 'profile' field
	var profname = cookie.profile; //puts 'profile' value into variable
	var filepath = req.file.filename + JSON.stringify(req.file.mimetype).substring(6,11); //puts file's path value into variable
	console.log("The filepath is: " + filepath); //double checks filepath value
	var sqlstatement = "SELECT id FROM users WHERE username = '" + profname + "'"; //takes out ID and puts into variable to be used in 2nd MySQL query
	connection.query(sqlstatement, async function(err, res) {//Inserts photo data
	console.log("The error, if any, is: " + err);
	selectedID = res[0].id;
		function photoinsert(id,path){ //had to create function to insert id & path in order to use the 'selectedID' variable as its value isn't global
			var sqlstatement = "INSERT INTO photos(user_id,image_path) VALUES('" + id + "','" + path + "')";

			connection.query(sqlstatement, function(err, result) {
			console.log("The error, if any, is: " + err);
			console.log(result);
			})};
	photofunc = await photoinsert(selectedID,filepath);
	filepath = filepath.replace(/"/g, "");
		function idretrieve(path){
			var sqlstatement1 = "SELECT id FROM photos WHERE image_path LIKE '" + path + "'";
			connection.query(sqlstatement1, function(err, result) {//Selecting photo ID for later hashtag INSERT
			console.log("The error, if any, is: " + err);
			console.log("The photo database ID is: " + result[0].id);
			var photoID = result[0].id;
			function taginsert(id){//Simply inserts the tags into the hashtags table
				var sqlstatement = "INSERT INTO hashtags(photos_id,tags) VALUES('" + id + "','" + req.body.tags + "')"	
				connection.query(sqlstatement, function(err, result) {//Selecting photo ID for later hashtag INSERT
				console.log("The error, if any, is: " + err);
				console.log(result);
			})};
			taginsert(photoID);
			})};
	idret = await idretrieve(filepath);
	});
	
	res.status(204).end();
});

app.listen(3000, function () {
 console.log('App listening on port 3000!');
});
