//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("The result of two numbers is " + result);
});


app.get("/bmicalculator",function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req, res){
    console.log(req.body);
    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);

    var bmi = weight/(height * height);
    res.send("your BMI is " + bmi);

});

app.listen(3000,function(){
    console.log("Sever has started on Port 3000.");
}); 