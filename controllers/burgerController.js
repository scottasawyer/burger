const express = require('express'),
    burger = require('../models/burger.js'),
    router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(data => {
        let hbsBurgers = {
            burgers: data
        }
        res.render('index', hbsBurgers);
    });
    router.post('/burgers/:id', (req, res) => {
        let condition = req.params.id;
        burger.updateOne({
            devoured: true
        }, condition, () => {
            res.redirect('/');
        })
    });

});

module.exports = router;