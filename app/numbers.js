exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    // 128 === 10000000
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {

    /*
    expect(numbersAnswers.convertToBinary(128)).to.eql('10000000');
    expect(numbersAnswers.convertToBinary(65)).to.eql('01000001');
    */

    /*
    Which Javascript array functions are mutating?
    pop, push, reverse, shift, sort, splice, unshift
    */

    var arr = [];
    var i = 1;
    while (i <= 8) {
        arr.push(this.valueAtBit(num, i));
        i++;
    }

    return arr.reverse().join("");
  },

  multiply: function(a, b) {
    a = adjust(a);
    b = adjust(b);

    var result = (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);

    return result;
    function adjust(num) {
        var exponent, multiplier;
        if (num < 1) { // if we're multiplying something less than one, e.g. 0.1
            exponent = Math.floor(Math.log(num) * -1);
            multiplier = Math.pow(10, exponent);
            return {adjusted: num * multiplier, multiplier: multiplier};
        }
        return {adjusted: num, multiplier:1};
    }
  }
};
