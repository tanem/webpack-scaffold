define(function(require){

  var $ = require('jquery');
  var styles = require('./styles/main.scss');
  var template = require('./templates/template.html');

  return {
    log: function(msg){
      $('body').append(template({ message: msg }));
    }
  };

});