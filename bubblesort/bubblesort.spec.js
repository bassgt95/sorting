describe('Bubble Sort', function(){

  it('uses the compare function the appropriate number of times', function(){
    spyOn(window, 'compare').and.callThrough();
    let arr = [4,6,9,2,5,7,1];
    bubbleSort(arr);
    let numComparisons = function() {
      let sum = 0;
      let counter = arr.length - 1;
      while (counter) {
        sum += counter;
        counter --;
      }
      return sum;
    }();
    expect(compare.calls.count()).toEqual(numComparisons);
  });

  it('uses the swap function the appropriate number of times', function(){
    spyOn(window, 'swap').and.callThrough();
    let arr = [4,6,9,2,5,7,1];
    bubbleSort(arr);
    expect(swap.calls.count()).toEqual(12);
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with length 1', function(){
    expect( bubbleSort([5]) ).toEqual( [5] );
  });

  it('returns an array with values in ascending order', function(){
    expect( bubbleSort([4,6,9,2,5,7,1]) ).toEqual( [1,2,4,5,6,7,9] );
  });

  it('mutates the original array', function(){
    let arr = [4,6,9,2,5,7,1];
    bubbleSort(arr);
    expect( arr ).toEqual( [1,2,4,5,6,7,9] );
  });

});