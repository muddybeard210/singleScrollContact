'use strict';

require('./header.scss');
const angular = require('angular');
const contactApp = angular.module('contactApp');

contactApp.component('appHeader', {
  template: require('./header.html'),
  controller: 'HeaderController',
  controllerAs: 'headerCtrl'
});

contactApp.controller('HeaderController', ['$log', '$location', '$animate', HeaderController]);

function HeaderController($log) {
  $log.debug('entering HeaderController');
}
