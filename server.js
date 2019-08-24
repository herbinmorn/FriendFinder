var express = require('express');
//var path = require('path');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app); 
require("./routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log('App is listening on PORT: '+ PORT);
});