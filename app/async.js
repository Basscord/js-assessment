exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(
      function(resolve, reject) {
        window.setTimeout(
          function() {
            resolve(value);
          }, 10);
        }
    );
  },

  manipulateRemoteData: function(url) {    
    return new Promise(
      function(resolve, reject) {
        $.ajax(url).then(function(resp) {
          var people = $.map(resp.people, function(person) {
            return person.name;
          });
          resolve(people.sort());
        });
      }
    );
  }
};
