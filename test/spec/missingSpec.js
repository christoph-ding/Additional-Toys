describe('missing', function () {  
    var testHere = test;
    it('should correctly pass its variables to this spec file', function () {
      expect(test).to.equal(testHere);
    });
    it('should return an invalid response if passed an empty array', function () {
      expect(missing([])).to.equal('invalid arr');
    });
    it('should return the missing number if passed a valid array', function () {
      expect(missing([1,2,3,5])).to.equal(4);
      expect(missing([2,3,5])).to.equal(1);
      expect(missing([1,2,3,4,5,6,7,8,10])).to.equal(9);
    });
})

