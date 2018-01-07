var express = require('express'),
  path = require('path'),
  app = express();

var port = process.env.PORT || 8080;

//tell express that we want to use the www folder
//for our static assets
app.use(express.static(__dirname));

// Listen for requests
app.get("/", function(request, response) {
	response.render("index");
});

app.listen(port, function(){
	console.log("app running...");
});