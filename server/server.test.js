const {app} = require('./app');
const request = require('supertest');

describe('GET /', ()=>{

  it('should return an array of objects with the correct properties', async ()=>{
    const response = await request(app).get('/');
    const data = response.body;
    expect(Array.isArray(data)).toBe(true );
    const entry = data[0];
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
      expect( entry ).toHaveProperty( propName );
      expect( typeof entry[propName] ).toBe( propType );
    })
  });

});

describe('GET /:product_id', ()=>{

  it('should return an object with the correct properties', async ()=>{
    const response = await request(app).get('/5');
    const data = response.body;
    expect( typeof data ).toBe( 'object' );
    console.log(data);
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
      expect( data ).toHaveProperty( propName );
      expect( typeof data[propName] ).toBe( propType );
    })
  });

  it('should include a "features" array of objects with the correct properties', async ()=>{
    const response = await request(app).get('/5');
    const data = response.body;
    expect( data ).toHaveProperty( 'features' );
    let {features} = data;
    expect( Array.isArray( features ) ).toBe( true );
    let featureObj = features[0];
    expect( typeof featureObj ).toBe( 'object' );

    [
      ['feature', 'string'],
      ['value', 'string'],

    ].forEach( property =>{
      let propName = property[0];
      let propType = property[1];
      expect( featureObj ).toHaveProperty( propName );
      expect( typeof featureObj[propName] ).toBe( propType );
    })

  });

});

describe('GET /:product_id/styles', ()=>{

  it('should return an object with the correct properties', async ()=>{
    const response = await request(app).get('/5/styles');
    const data = response.body;
    expect( typeof data ).toBe( 'object' );
    expect( data ).toHaveProperty( 'product_id' );
    expect( data ).toHaveProperty( 'results' );
    expect( typeof data['product_id'] ).toBe('string');
    expect( Array.isArray( data.results ) ).toBe( true );
  });

  describe('"results" array entry', ()=>{

    it('should be an object with the correct properties', async ()=>{
      const response = await request(app).get('/5/styles');
      const result = response.body.results[0];

      [
        ['style_id', 'number'],
        ['name', 'string'],
        ['original_price', 'string'],
        ['sale_price', 'string'],
        ['default?', 'boolean'],
        ['photos', 'object'],
        ['skus', 'object'],

      ].forEach( property =>{
        let propName = property[0];
        let propType = property[1];
        expect(result).toHaveProperty(propName);
        expect( typeof result[propName] ).toBe( propType );
      });

      expect( result ).toHaveProperty( 'photos' );
      expect( Array.isArray( result[photos] ) ).toBe( true );
    });

    describe('"photos" array entry', ()=> {

      it('should be an object with the correct properties', async ()=>{
        const response = await request(app).get('/5/styles');
        const photo = response.body.results[0].photos[0];
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
      });
      
    });

    describe('"skus" object', ()=>{

      it('should be an object with the correct properties', async ()=>{
        const response = await request(app).get('/5/styles');
        const skus = response.body.results[0].skus;

        [
          ['25', 'object'],
          ['26', 'object'],
          ['27', 'object'],
          ['28', 'object'],
          ['29', 'object'],
          ['30', 'object'],

        ].forEach( property =>{
          let propName = property[0];
          let propType = property[1];
          expect(skus).toHaveProperty(propName);
          expect( typeof skus[propName] ).toBe( propType );
        });

        expect( result ).toHaveProperty( 'photos' );
        expect( Array.isArray( result[photos] ) ).toBe( true );
      });

      describe('"skus" entry', ()=>{

        it('should be an object with the correct properties', async()=>{
          const response = await request(app).get('/5/styles');
          const sku = response.body.results[0].skus['25'];

          [
            ['quantity', 'number'],
            ['size', 'string'],

          ].forEach( property =>{
            let propName = property[0];
            let propType = property[1];
            expect(sku).toHaveProperty(propName);
            expect( typeof sku[propName] ).toBe( propType );
          });

        })
      });

    });

  })
});

describe('GET /:product_id/related', ()=>{

  it('should return an array of numbers', async ()=>{
    const response = await request(app).get('/5/related');
    const data = response.body;
    expect( Array.isArray( data ) ).toBe( true );
    expect( typeof data[0] ).toBe( 'number' );
  });

});