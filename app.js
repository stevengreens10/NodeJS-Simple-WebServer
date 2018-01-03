var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/index')
var path = require('path')

var app = express()

// Sets the port that the server will run on
app.set('port', (process.env.PORT || 3000))

// Sets the template engine to EJS
app.set('view engine', 'ejs')

// Parses POST requests and stores form data in req.body.(name)
app.use(bodyParser.urlencoded({extended:false}));

// Allows access to files in the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Moves routing at the / url path to routes/index.js
app.use('/', routes)

// Starts the server
app.listen(app.get('port'), function() {
    console.log("Server running on port " + app.get('port'))
})
