exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    console.log(arr);
    console.log(item);
    // indexOf
    // splice
    var i = 0;
    while(i < arr.length){
      if(arr[i] === item) {
        arr.splice(i,1);
      } else {
        i++;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
