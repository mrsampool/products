const related = require('./related');

describe('Related Model', ()=> {

  describe('queryByProductId', ()=> {

    it('should return an array of integers', () => {
      return related.queryByProductId(5)
      .then(rows => {
        console.log(rows);
        expect( Array.isArray( rows ) ).toBe( true );
        expect( rows.length ).toBeTruthy();
      });
    });
  });

});