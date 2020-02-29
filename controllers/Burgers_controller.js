const express = require("express");
const router = express.Router(); 


const burger = require("../models/burger.js");


router.get("/", function(req, res) {
    console.log("Route Path Hit");
    burger.selectAll((data) => {
      handlebarsObject = {
        burger: data
      };
      console.log("Diplayed burgers");
      res.render("index", handlebarsObject);
    });

});


router.post("/api/Burger", function(req, res) {
  console.log("Burger Route Hit");
  burger.insertOne(["Burger_name","devoured"], [req.body["burger_name"], req.body.devoured], (result)=>{
    
    console.log(result);
    res.json(result);
  });
});

router.put("/api/burger/:id", function(req, res) {

  let burgerID = req.params.id
  let condition = "id = " + burgerID ;

  console.log("burger Route Hit. ID is "+ burgerID);
  console.log("Dev is " + req.body.devoured);

  burger.updateOne(["devoured"], [req.body.devoured], condition, (result)=>{
    
    console.log("Executing First Declared CallBack");
    res.json(result);
  });
});









module.exports = router;

