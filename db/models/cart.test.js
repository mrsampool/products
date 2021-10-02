const cart = require('./cart');
const {expectPropsAndTypes} = require('../../utils/testUtils');

describe('Cart Model' , ()=>{

  describe('query', ()=>{
    let cartData;
    beforeAll( async ()=>{
      cartData = await cart.query(1234);
    })

    it('should return an array', ()=>{
      expect( Array.isArray( cartData ) ).toBe( true );
    });

    describe('item entries', ()=>{

      it('should have the correct properties', ()=>{
        let item = cartData[0];
        expectPropsAndTypes(item, [
          ['sku_id','number'],
          ['count', 'string']
        ]);
      });

    });

  });

  describe('insert', ()=>{

    it('should insert a product to the cart', ()=>{

      let cartItem = { user_session: 5555, product_id: 55 };
      let newId;

      return cart.insert(cartItem)
      .then( insertId =>{

        expect( typeof insertId ).toBe( 'number' );
        newId = insertId;
        return cart.query()

      })
      .then( ()=>{
        cart.delete(newId)
        .catch( err => console.log(err) );
      });
    });

  });

})