const express = require('express');
const app = express();
const {router} = require('./router');
const path = require('path');
/*
app.use( (req, res, next)=>{
  console.log(`\nIncoming ${req.method} request to ${req.path}`);
  console.log(req.body);
  next();
})
*/

app.use(express.static( path.join(__dirname, '..', 'static') ));
app.use( router);

module.exports.app = app;