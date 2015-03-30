'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeCtrl as home',
    template: require('../views/home.html'),
    title: '시스템 전체 담당자 권한'
  });

  $urlRouterProvider.otherwise('/');

}

module.exports = Routes;