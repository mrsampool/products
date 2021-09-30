const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const {router} = require('./router');

app.use( (req, res, next)=>{
  console.log(`\nIncoming ${req.method} request to ${req.path}`);
  console.log(req.body);
  next();
})

app.use('/', router);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, ()=> console.log('I\'m listening!') );
}

module.exports.app = app;