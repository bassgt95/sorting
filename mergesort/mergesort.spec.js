describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        let arr = [1,2,3,4,5,6,7];
        expect( split(arr) ).toEqual( [[1,2,3,4],[5,6,7]] )
    });
  });