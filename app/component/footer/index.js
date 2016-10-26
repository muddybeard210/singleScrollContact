'use strict';

require('./footer.scss');
const angular = require('angular');
const contactApp = angular.module('contactApp');

contactApp.component('appFooter', {
  template: require('./footer.html'),
  controller: 'FooterController',
  controllerAs: 'footerCtrl'
});

contactApp.controller('FooterController', ['$log', '$location', '$animate', FooterController]);

function FooterController($log) {
  $log.debug('entering FooterController');
}
