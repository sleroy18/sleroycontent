var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req, res, next) {
  next();
});

router.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

router.get("/index.html", function (req, res) {
  res.sendFile(path + "index.html");
});

router.get("/exp.html", function(req, res){
  res.sendFile(path + "exp.html");
});

router.get("/stream.html", function(req, res){
  res.sendFile(path + "stream.html");
});

router.get("/videos.html", function(req, res){
  res.sendFile(path + "videos.html");
});

app.use("/", router);
app.use(express.static("assets"));
app.listen(3000, () => console.log('running on 3000'));

