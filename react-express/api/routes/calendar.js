var express = require('express');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
        console.log(__dirname + '/calendar.html');
        res.sendFile(path.join(__dirname + '/calendar.html'));
    });

module.exports = router;