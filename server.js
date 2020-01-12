const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//app.set('views', path.join(__dirname, '/views'));
//console.log(__dirname);

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
    //__dirname : It will resolve to your project folder.
});

router.get('/exp', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/exp.html'));
});

router.get('/stream', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/stream.html'));
});

router.get('/videos', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/videos.html'));
});

app.use(express.static(__dirname + '/public'));

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');