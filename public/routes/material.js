'use strict';

angular.module('mean.material').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('material sample page', {
      url: '/material',
      templateUrl: 'material/views/index.html'
    });
  }
]);
