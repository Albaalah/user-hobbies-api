const express = require('express');
const router = express.Router();
const _ = require("lodash");

const static_response = [{
    "_id": "1",
    "title": "Bird Watching",
    "passion": "Low",
    "year": "1995"
}, {
    "_id": "2",
    "title": "Hiking",
    "passion": "High",
    "year": "2000"
}, {
    "_id": "3",
    "title": "Video Games",
    "passion": "Medium",
    "year": "2000"
}];

router.get('/:id', function (req, res, next) {
    res.send({
        "hobbies": _.shuffle(static_response) // randomize hobbies to simulate a changing response against each user
    });
});

router.post('/', function (req, res, next) {
    res.send("New hobby detail added successfully");
});

module.exports = router;
