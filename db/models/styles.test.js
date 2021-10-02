const styles = require('./styles');
const {expectPropsAndTypes} = require('../../utils/testUtils');



describe('Styles Model', ()=>{

  describe('queryByProductId', ()=>{

    jest.setTimeout(90 * 1000);

    it('should return objects with the correct properties', async ()=>{

      jest.setTimeout(20000);

      await styles.queryByProductId(5)
      .then( rows =>{
        let result = rows[0];

        console.log(result);

        let propsAndTypes = [
          ['style_id', 'number'],
          ['name', 'string'],
          ['original_price', 'string'],
          ['sale_price', 'string'],
          ['default?', 'boolean'],
          ['photos', 'object'],
          ['skus', 'object']
        ];

        expectPropsAndTypes(result, propsAndTypes);
        expect( Array.isArray( result.photos )).toBe(true);
      });

    });

    describe('"photos" array entry', ()=> {

      it('should be an object with the correct properties', async ()=>{
        await styles.queryByProductId(5)
        .then( rows =>{
          const photo = rows[0].photos[0];
          expect( typeof photo ).toBe( 'object' );

          let propsAndTypes = [
            ['thumbnail_url','string'],
            ['url','string']
          ];

          expectPropsAndTypes(photo, propsAndTypes);
        })
      });
    });

    describe('"skus" object', ()=>{

      it('should be an object with the correct properties', async ()=>{
        await styles.queryByProductId(5)
        .then( rows =>{
          const {skus} = rows[0];

          let propsAndTypes = [
            ['25', 'object'],
            ['26', 'object'],
            ['27', 'object'],
            ['28', 'object'],
            ['29', 'object'],
            ['30', 'object']
          ];

          expectPropsAndTypes(skus, propsAndTypes);
        })
      });

      describe('"skus" entry', ()=>{

        it('should be an object with the correct properties', async()=>{
          await styles.queryByProductId(5)
          .then( rows =>{
            const sku = rows[0].skus['25'];

            let propsAndTypes = [
              ['quantity', 'number'],
              ['size', 'string'],
            ];

            expectPropsAndTypes(sku, propsAndTypes)
          });
        });
      });
    });
  });
});