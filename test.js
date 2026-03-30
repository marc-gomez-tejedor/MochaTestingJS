describe("pow", function() {

  describe("raises x to power 3", function() {
    function makeTestPower3(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTestPower3(x);
    }

  });
  
  // more tests to follow here

});