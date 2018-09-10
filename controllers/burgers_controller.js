var express = require("express");
var burger = require("../model/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
    //express callback response by calling burger.selectAllBurger
    burger.all(function(burgerData){
        res.render("index", {burger_data: burgerData});
    });
})
        //console.log(hbsObject);
        //res.render("index", hbsObject);

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
    });

});

module.exports = router;