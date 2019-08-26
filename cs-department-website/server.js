var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongo = require("mongoose");

var db = mongo.connect("mongodb://localhost:27017/cs-department",function(err,response){
    if(err){
        throw err;
    }else{
        console.log("Connected to database");
    }
});
var app = express();
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Allow-Access-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Allow-Access-Allow-Headers','X-Requested-With,content-type');
    res.setHeader("Access-Control-Allow-Credentials",true);
    next();
});

app.listen(8000,function(){
    console.log("connected");
});