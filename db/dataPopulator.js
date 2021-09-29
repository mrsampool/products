// Libraries
const fs = require('fs');
const { Pool } = require('pg');

// Utilities
const { dbConfig } = require('./config.js');
const { dbQueries } = require('./dbQueries');
const { Product } = require('./models');

// DB Connection
const pool = new Pool(dbConfig);

function importProducts(){

  function insertProduct(product){

    let {id, name, slogan, description, default_price} = product;
    let args = [ id, name, slogan, description, default_price ];

    client.query( dbQueries.populators.insertProduct, args )
    .then( console.log(`👍${product.id}`))
    .catch( err => console.log( err ));
  }

  pool.connect()
  .then(client =>{
    fs.readFile('starterData/product.csv', 'utf8', (err, data)=>{
      if (err){
        throw err;
      } else {
        let productsProcessed = data.split('\n').slice(1).map( product =>{
          return new Product(product);
        });
        productsProcessed.forEach( product => insertProduct(product));
      }
    });
  });

}


