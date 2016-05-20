const angular = require('angular');

angular.module('app', [
  require('./../tmp/templates').name,
  require('./user').name
]);
