const products = require('./products');
const styles = require('./styles');

describe('Products Model', ()=> {

  describe('queryById', ()=> {

    it('should return an array of objects with the correct properties', async ()=>{
      products.queryById(5)
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
      products.queryById(5)
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

describe('Styles Model', ()=>{

  describe('queryByProductId', ()=>{

    it('should return objects with the correct properties', async ()=>{

      styles.queryByProductId(5)
      .then( ({rows}) =>{
        let result = rows[0];

        [
          ['style_id', 'number'],
            ['name', 'string'],
            ['original_price', 'string'],
            ['sale_price', 'string'],
            ['default?', 'boolean'],
            ['photos', 'object'],
            ['skus', 'object']
        ].forEach( property =>{
          let propName = property[0];
          let propType = property[1];
          expect(result).toHaveProperty(propName);
          expect( typeof result[propName] ).toBe( propType );
        });


      });

    });

    /*
    expect( result ).toHaveProperty( 'photos' );
    expect( Array.isArray( result[photos] ) ).toBe( true );

     */
    describe('"photos" array entry', ()=> {

      it('should be an object with the correct properties', async ()=>{
        styles.queryByProductId(5)
        .then( ({rows}) =>{
          const photo = rows[0].photos[0];
          expect( typeof photo ).toBe( 'object' );
          [
            ['thumbnail_url','string'],
            ['url','string']
          ].forEach( property =>{
            let propName = property[0];
            let propType = property[1];
            expect( photo ).toHaveProperty( propName );
            expect( typeof photo[propType] ).toBe( propType );
          })

        })
      });
    });

    describe('"skus" object', ()=>{

      it('should be an object with the correct properties', async ()=>{
        styles.queryByProductId(5)
        .then( ({rows}) =>{
          const {skus} = rows[0];
          [
            ['25', 'object'],
            ['26', 'object'],
            ['27', 'object'],
            ['28', 'object'],
            ['29', 'object'],
            ['30', 'object']

          ].forEach( property =>{
            let propName = property[0];
            let propType = property[1];
            expect(skus).toHaveProperty(propName);
            expect( typeof skus[propName] ).toBe( propType );
          });
        })
      });

      describe('"skus" entry', ()=>{

        it('should be an object with the correct properties', async()=>{
          styles.queryByProductId(5)
          .then( ({rows}) =>{
            const sku = rows[0].skus['25'];
            [
              ['quantity', 'number'],
              ['size', 'string'],
            ].forEach( property =>{
              let propName = property[0];
              let propType = property[1];
              expect(sku).toHaveProperty(propName);
              expect( typeof sku[propName] ).toBe( propType );
            });
          });
        });
      });
    });
  });
});