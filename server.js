var express = require ("express");
var path = require("path");
var app = express();

app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});
app.use("/data", express.static(path.join(__dirname + "/data")));
app.use("/carpeta", express.static(path.join(__dirname + "/js")));

app.listen(8090);
