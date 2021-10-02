const products = require('./products');

describe('Products Model', ()=> {

  describe('queryById', ()=> {

    it('should return an array of objects with the correct properties', async ()=>{
      await products.queryById(5)
      .then( ({rows}) => {
        let result  = rows[0];

        [
          ['id', 'number'],
          ['name', 'string'],
          ['slogan', 'string'],
          ['description', 'string'],
          ['category', 'string'],
          ['default_price', 'string']

        ].forEach( property =>{
          let propName = property[0];
          let propType = property[1];
          expect( result ).toHaveProperty( propName );
          expect( typeof result[propName] ).toBe( propType );
        });

      });
    });

    it('objects should include a "features" array of objects with the correct properties', async ()=>{
      await products.queryById(5)
      .then( ({rows}) => {
        let feature = rows[0].features[0];
        [
          ['feature', 'string'],
          ['value', 'string'],
        ].forEach( property =>{
          let propName = property[0];
          let propType = property[1];
          expect( feature ).toHaveProperty( propName );
          expect( typeof feature[propName] ).toBe( propType );
        })
      });
    });

  });

});