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

  append: function(arr, item) {
    arr.push(item);
    return arr; // Why do I have to do this in two lines?
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.reverse();
    arr.push(item);
    arr.reverse();
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var i = 0;
    while (i < arr2.length) {
      arr1.push(arr2[i]);
      i++;      
    }
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item); // Revisit this
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i+=1){
      if (arr[i] === item) {count++;}
    }
    return count;
  },

  duplicates: function(arr) {
    var uniques = [];
    var duplicates = [];
    for (var i = 0; i < arr.length; i++){
      if(uniques.indexOf(arr[i]) !== -1 && duplicates.indexOf(arr[i]) === -1 ) {
        duplicates.push(arr[i]);
      } else if(uniques.indexOf(arr[i]) === -1) {
        uniques.push(arr[i]);
      }
    }
    return duplicates;
  },

  square: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var indexes = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        indexes.push(i);
      }
    }
    return indexes;
  }
};
