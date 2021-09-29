module.exports.dbQueries = {
  populators: {
    insertProduct: 'INSERT INTO products (id, name, slogan, description, default_price) VALUES ($1, $2, $3, $4, $5);'
  }
}