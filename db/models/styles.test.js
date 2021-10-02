const styles = require('./styles');
const {expectPropsAndTypes} = require('../../utils/testUtils');

describe('Styles Model', ()=>{

  describe('queryByProductId', ()=>{

    let rows;
    jest.setTimeout(90 * 1000);
    beforeAll( async ()=>{
      rows = await styles.queryByProductId(5);
    });

    it('should return objects with the correct properties', ()=>{
      let result = rows[0];
      expectPropsAndTypes(
        result,
        [
        ['style_id', 'number'],
        ['name', 'string'],
        ['original_price', 'string'],
        ['sale_price', 'string'],
        ['default?', 'boolean'],
        ['photos', 'object'],
        ['skus', 'object']
      ]);
      expect( Array.isArray( result.photos )).toBe(true);
    });

    describe('"photos" array entry', ()=> {

      it('should be an object with the correct properties', ()=>{
        const photo = rows[0].photos[0];
        expect( typeof photo ).toBe( 'object' );
        expectPropsAndTypes(photo, [
          ['thumbnail_url','string'],
          ['url','string']
        ]);
      });

    });

    describe('"skus" object', ()=>{

      it('should be an object with the correct properties',  ()=>{
          const {skus} = rows[0];
          expectPropsAndTypes(skus, [
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
          ]);
      });

      describe('"skus" entry', ()=>{
        it('should be an object with the correct properties', ()=>{
          const sku = rows[0].skus['127'];
          expectPropsAndTypes(sku, [
            ['quantity', 'number'],
            ['size', 'string'],
          ])
        });
      });

    });
  });

});