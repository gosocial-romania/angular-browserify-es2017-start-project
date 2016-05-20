const angular = require('angular');
module.exports = angular.module('app.user', [])
  .directive('users', ()=>{
    return {
      templateUrl: `${__dirname}/user.component.html`,
      controller: require('./user.component'),
      controllerAs: '$ctrl'
    };
  });
