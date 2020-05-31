const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.send({
        "users": [
            {"_id": "1", "name": "John Smith"},
            {"_id": "2", "name": "Paige Turner"},
            {"_id": "3", "name": "Rita Book"},
            {"_id": "4", "name": "Peter Johnson"},
            {"_id": "5", "name": "Sarah Smith"},
            {"_id": "6", "name": "A. Mused"},
            {"_id": "7", "name": "Alex Watson"},
            {"_id": "8", "name": "Anna Littlical"},
            {"_id": "9", "name": "Anne T. Dote"},
            {"_id": "10", "name": "Jane Smith"},
            {"_id": "11", "name": "Dee End"}
        ],
    });
});

router.post('/', function (req, res, next) {
    res.send("API is working properly");
    res.end('It worked!');
});

module.exports = router;
