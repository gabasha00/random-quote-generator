var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    // read from data.json
    fs.readFile('./data/data.json', 'utf8', function (err, data) {
        // randomly select an item from data
        if (err) {
            console.error(err);
            return next(err);
        }

        const items = JSON.parse(data);

        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
        // render the index.hbs template with the randomly selected item 
        res.render('index', {
            title: 'Inspirational Quote for Your Day',
            randomItem: randomItem,
        });
    });
});

module.exports = router;
