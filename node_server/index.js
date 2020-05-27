var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

// hand post requests
app.post('/', function(req, res){
   var response="Received: Display Name ["+req.body.displayName+
				"], Date of Birth ["+req.body.dateOfBirth+
				"], Option 1 ["+req.body.option1+
				"], Option 2 ["+req.body.option2+
				"], File Name ["+req.body.fileName+"]";;
   res.status(200).send(response);
});

// create a server 
app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))


