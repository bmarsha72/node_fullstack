var express = require('express');
var Butterflycontroller = express.Router();
var Butterflies         = require ('./db/database')

var Butterly = require('./models/Butterly');

/* GET home page. */
ButterlyController.route('/')
    .get(function(req,res,next){
      res.json(Butterflies)
    })
    .post(function(req,res,next){
      //accept post requests here
    })



// controller.get('/', function(req, res, next) {
//   Butterly.find(function(err,Butterflies){
//     if(err) return next (err)
//     res.json(Butterflies)
//   })
// });
//
// controller.post('/', function(req, res, next){
//   Butterfly.create(req.body, function(err, Butterly){
//     if (err) return next(err);
//     res.json(Butterfly);
//   })
// })
module.exports = controller;
