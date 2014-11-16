var MQFacade = require('media-query-facade');
var logger = require('../logger');
var styles = require('./styles/main.scss');

logger.log('Hello from app');

var mq = new MQFacade({
  small: 'only screen and (max-width: 480px)',
  medium: 'only screen and (min-width: 480px) and (max-width: 720px)',
  large: 'only screen and (min-width: 720px)'
});

mq.on('small', changeColour('blue'));
mq.on('medium', function(){
  changeColour('green')();
  require.ensure([], function(require){
    require('../module');
  });
});
mq.on('large', changeColour('hotpink'));

function changeColour(colour){
  return function(){
    document.body.style.backgroundColor = colour;
  };
}

setTimeout(function(){
  throw new Error('ouch');
}, 1000);