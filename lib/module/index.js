var $ = require('jquery');
var logger = require('../logger');
var styles = require('./styles/main.scss');
var template = require('./templates/template.html');

$('body').append(template());

logger.log('Hello from Module!');