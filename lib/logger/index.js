define(function(require){

  var $ = require('jquery');

  return {
    log: function(msg){
      $('body').append('<span>' + msg + '</span>');
    }
  };

});