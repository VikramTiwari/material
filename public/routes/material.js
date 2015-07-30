// 'use strict';
//
// angular.module('mean.material').config(['$stateProvider',
//   function($stateProvider) {
//     $stateProvider.state('material sample page', {
//       url: '/material',
//       templateUrl: 'material/views/index.html'
//     });
//   }
// ]);
//

'use strict';

// $viewPathProvider, to allow overriding material default views
angular.module('mean.material').provider('$viewPath', function() {
	function ViewPathProvider() {
		var overrides = {};

		this.path = function(path) {
			return function() {
				return overrides[path] || path;
			};
		};

		this.override = function(defaultPath, newPath) {
			if (overrides[defaultPath]) {
				throw new Error('View already has an override: ' + defaultPath);
			}
			overrides[defaultPath] = newPath;
			return this;
		};

		this.$get = function() {
			return this;
		};
	}

	return new ViewPathProvider();
});

// $meanStateProvider, provider to wire up $viewPathProvider to $stateProvider
angular.module('mean.material').provider('$meanState', ['$stateProvider', '$viewPathProvider', function($stateProvider, $viewPathProvider) {
	function MeanStateProvider() {
		this.state = function(stateName, data) {
			if (data.templateUrl) {
				data.templateUrl = $viewPathProvider.path(data.templateUrl);
			}
			$stateProvider.state(stateName, data);
			return this;
		};

		this.$get = function() {
			return this;
		};
	}

	return new MeanStateProvider();
}]);

//Setting up route
angular.module('mean.material').config(['$meanStateProvider', '$urlRouterProvider',
	function($meanStateProvider, $urlRouterProvider) {
		// For unmatched routes:
		$urlRouterProvider.otherwise('/');

		// states for my app
		$meanStateProvider
			.state('home', {
				url: '/',
				templateUrl: 'material/views/index.html'
			});

		$meanStateProvider
			.state('Log Out', {
				controller: function() {
					window.location = '/logout';
				}
			});
	}
]).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}
]);
