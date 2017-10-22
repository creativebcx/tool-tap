const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {ToolPackage} = require('./schema');

router.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', (req, res) => {
  console.log('--GET request working--');
  ToolPackage
    .find()
    .limit(20)
    .exec()
    .then(Tools => {
      console.log(ToolPackage.collection.name);
      let projectType = req.query.projectType;
      // let toolType = req.query.toolType;
      // let location = req.query.location;
      let response = Tools.filter( function(tool) {
        
      }); 
    });

    res.json({
     body: ToolPackage.collection.conn.Native
    });
});

module.exports = router;