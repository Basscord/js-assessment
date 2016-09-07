exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var result = [];
    var self = this;

    function doIt(one, two) {
        var temp = self.listFiles(one, two);
        for (var i = 0; i < temp.length; i++) {
            result.push(temp[i]);
        }
    }

    for (var i = 0; i < data.files.length; i++) {
        if((typeof data.files[i] === 'object') && ((!dirName) || (dirName === data.dir) || (dirName === data.files[i].dir))) {
            doIt(data.files[i], data.files[i].dir);    
        }
        else if((!dirName) || (dirName === data.dir)) {
            result.push(data.files[i]);
        }
    }

    return result;
  },

  permute: function(arr) {

    var temp = [];
    var permutations = [];
    
    function store() {
        permutations.push(temp.slice());
    }

    function moveFromArrayToTemp(index) {
        var item = arr.splice(index, 1)[0];
        temp.push(item);
    }

    function moveFromTempToArray(index) {
        arr.splice(index, 0, temp.pop());
    }

    function doIt() {

        for(var index = 0; index < arr.length; index++) {
            
            moveFromArrayToTemp(index);
            
            if(arr.length) {
                doIt();
            } else {
                store();              
            }

            moveFromTempToArray(index);
        }
        
    }

    doIt();

    return permutations;

  },

  fibonacci: function(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return this.fibonacci(n-1) + this.fibonacci(n-2);
  },

  validParentheses: function(n) {

  }
};
