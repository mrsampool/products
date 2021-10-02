const related = require('./related');

describe('Related Model', ()=> {

  describe('queryByProductId', ()=> {

    it('should return an array of integers', () => {
      return related.queryByProductId(5)
      .then(related => {
        console.log(related);
        expect( Array.isArray( related ) ).toBe( true );
        expect( related.length ).toBeTruthy();
        related.forEach( item =>{
          expect( typeof item ).toBe( 'number' );
        })
      });
    });
  });

});