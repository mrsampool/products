const express = require('express');
const app = express();
const {router} = require('./router');
/*
app.use( (req, res, next)=>{
  console.log(`\nIncoming ${req.method} request to ${req.path}`);
  console.log(req.body);
  next();
})
*/
app.use( router);

module.exports.app = app;