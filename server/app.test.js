// Utils
const request = require('supertest');
const {expectPropsAndTypes} = require('../utils/testUtils');

// App
const {app} = require('./app');

describe('GET /products', ()=>{

  it('should return an array of objects with the correct properties', async ()=>{
    const response = await request(app).get('/products');
    const data = response.body;
    expect(Array.isArray(data)).toBe(true );
    const entry = data[0];
    expect(entry.id).toBe(1);
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

  describe('GET /products?count=15', ()=>{

    it('should return an array of 15 product objects', async ()=>{
      const response = await request(app).get('/products?count=15');
      const data = response.body;
      expect(data.length).toBe(15 );
    });

  });

  describe('GET /products?page=3', ()=>{

    it('should return the 3rd page of results', async ()=>{
      const response = await request(app).get('/products?page=3')
      const data = response.body;
      expect( data[0].id ).toBe( 11 );
    });

  });

});

describe('GET /products/:product_id', ()=>{

  it('should return an object with the correct properties', async ()=>{
    const response = await request(app).get('/products/5');
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
    const response = await request(app).get('/products/5');
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

describe('GET /products/:product_id/styles', ()=>{

  let response;
  jest.setTimeout(90 * 1000);

  beforeAll( async()=>{
    response = await request(app).get('/products/5/styles');
  })

  it('should return an object with the correct properties', ()=>{
    const data = response.body;
    expect( typeof data ).toBe( 'object' );
    expect( data ).toHaveProperty( 'product_id' );
    expect( data ).toHaveProperty( 'results' );
    expect( typeof data['product_id'] ).toBe('string');
    expect( Array.isArray( data.results ) ).toBe( true );
  });

  describe('"results" array entry', ()=>{

    it('should be an object with the correct properties', ()=>{
      const result = response.body.results[0];
      let propsAndTypes = [
        ['style_id', 'number'],
        ['name', 'string'],
        ['original_price', 'string'],
        ['sale_price', 'string'],
        ['default?', 'boolean'],
        ['photos', 'object'],
        ['skus', 'object'],

      ];
      expectPropsAndTypes(result, propsAndTypes);
      expect( result ).toHaveProperty( 'photos' );
      expect( Array.isArray( result['photos'] ) ).toBe( true );
    });

    describe('"photos" array entry', ()=> {

      it('should be an object with the correct properties', ()=>{
        const photo = response.body.results[0].photos[0];
        expect( typeof photo ).toBe( 'object' );
        let propsAndTypes = [
          ['thumbnail_url','string'],
          ['url','string']
        ];
        expectPropsAndTypes( photo, propsAndTypes );
      });
      
    });

    describe('"skus" object', ()=>{

      it('should be an object with the correct properties', ()=>{
        const skus = response.body.results[0].skus;
        let propsAndTypes = [
          ['127', 'object'],
          ['128', 'object'],
          ['129', 'object'],
          ['130', 'object'],
          ['131', 'object'],
          ['132', 'object'],
          ['133', 'object'],
          ['134', 'object'],
          ['135', 'object'],
          ['136', 'object'],
          ['137', 'object'],
        ];
        expectPropsAndTypes(skus, propsAndTypes)
      });

      describe('"skus" entry', ()=>{
        it('should be an object with the correct properties', ()=>{
          const sku = response.body.results[0].skus['127'];
          let propsAndTypes = [
            ['quantity', 'number'],
            ['size', 'string'],
          ];
          expectPropsAndTypes(sku, propsAndTypes);
        });
      });
    });
  })
});

describe('GET /products/:product_id/related', ()=>{
  let response;
  beforeAll( async () =>{
    response = await request(app).get('/products/5/related');
  })
  it('should return an array of numbers', ()=>{
    const data = response.body;
    expect( Array.isArray( data ) ).toBe( true );
    expect( typeof data[0] ).toBe( 'number' );
  });
});