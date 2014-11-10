define(function(require){

  var $ = require('jquery');
  var styles = require('./styles/main.scss');

  return {
    log: function(msg){
      $('body').append('<span class="log-message">' + msg + '</span>');
    }
  };

});