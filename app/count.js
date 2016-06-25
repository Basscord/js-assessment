exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var i = start;
    console.log(i);
    var interval = setInterval(function(){
      if(i === end) {
        clearInterval(interval);
      } else {
        i++;
        console.log(i);
      }
    }, 100);
    return {
      cancel: function() {
        interval && clearInterval(interval);
      }
    }
  }
};
