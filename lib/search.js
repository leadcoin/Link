// Generated by CoffeeScript 1.6.3
(function() {
  var Search;

  Search = function(db) {
    return db.search = function(keyword, callback) {
      var pattern, results, stream;
      results = [];
      stream = db.createValueStream();
      pattern = new RegExp(".*" + keyword + ".*", "ig");
      return stream.on('data', function(data) {
        var key, value, _results;
        _results = [];
        for (key in data) {
          value = data[key];
          if (pattern.test(value)) {
            callback(data);
            break;
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      });
    };
  };

  exports.search = Search;

}).call(this);
