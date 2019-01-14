var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.get("/api/burgers", function(req, res){
    burger.all(function(data){
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.json(burgerObject);
    });
});

router.get("/api/burgers/:id", function(req, res){
    burger.viewOne(req.params.id, function(data){
        console.log(data);
        res.json(data);
    });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body.name);
    burger.create(req.body.name, function(result){
        res.json({id: result.id})
    });
});

router.put("/api/burgers/:id", function(req, res){
    burger.update(true, req.params.id, function(result){
        if (result.changedRows === 0){
            return res.status(400).end();
        }else {
        res.status(200).end();
        }
    });
});

module.exports = router;