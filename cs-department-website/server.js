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
var router = express.Router();
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Allow-Access-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Allow-Access-Allow-Headers','Origin,X-Requested-With,content-type,Accept');
    res.setHeader("Access-Control-Allow-Credentials",true);
    next();
});
var Schema = mongo.Schema;

var achievements=new Schema({
    name:{type:String},
    usn:{type:String},
    Year_of_admission:{type:Number},
    competition:{type:String},
    Win:{type:String},
    date_of_participation:{type:Date}
});
var model = mongo.model('achievements',achievements);
app.get("/achievements/api",function(req,res) {
    model.find({})
    .exec(function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
            console.log(data);
            
        }
    })
});


app.listen(8000,function(){
    console.log("connected");
});