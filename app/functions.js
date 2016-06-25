exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr); // Apply is the args as array. AAA
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return function(arg) {
      return str + ', ' + arg;
    }
  },

  makeClosures: function(arr, fn) {
    // What is happening here?
    // Revisit this.
    var ret = []; // array of *something* we're returning

    var makeFn = function (val) {
      return function() {
        return fn(val);
      }
    }

    for(var i = 0; i < arr.length; i++) {
      ret.push(makeFn(arr[i]));
    }

    return ret;
  },

  partial: function(fn, str1, str2) {
    var func = function(str3){
      return fn(str1, str2, str3);
    }
    return func;
  },

  useArguments: function() {
    var sum = 0;
    for(var index = 0; index < arguments.length; index++) {
      sum = sum + arguments[index];
    }
    return sum;
  },

  callIt: function(fn) {
    var otherArgs = [].slice.call(arguments);
    otherArgs.shift(); // Why does this have to be on another line?
    fn.apply(this, otherArgs);
  },

  partialUsingArguments: function(fn) {
    
    var otherArgs = [].slice.call(arguments);
    otherArgs.shift(); // Why does this have to be on another line?
    
    var func = function(){
      var i = 0;
      while (i < arguments.length) {
        otherArgs.push(arguments[i]);
        i++;      
      }
      return fn.apply(this, otherArgs);
    }
    return func;
  },

  curryIt: function(fn) {
    
    var args = [].slice.call(arguments);
    args.shift();

    if(args.length === fn.length) {
      return fn.apply(this, args);
    } else {

      var func = function(arg) {
        
        var args2 = [].slice.call(arguments);
        
        var i = 0;
        while (i < args2.length) {
          args.push(args2[i]);
          i++;     
        }
        
        if(args.length === fn.length){
          return fn.apply(this, args);
        } else {
          return func;
        }
      }
      return func;
    }
  }
};
