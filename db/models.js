module.exports.Product = class Product{
  constructor(array){
    let values = array.split(/,[^\s]/);
    this.id = values[0];
    this.name = values[1];
    this.slogan = values[2];
    this.description = values[3];
    this.category = values[4];
    this.default_price = values[5];
  }
}