'use strict';

/* jshint -W098 */
// angular.module('mean.material', ['mean.system'])
// .config(['$viewPathProvider', function($viewPathProvider) {
//   $viewPathProvider.override('system/views/index.html', 'material/views/index.html');
// }]);

angular.module('mean.material').controller('MaterialController', ['$scope', 'Global', 'Material',
	function($scope, Global, Material) {
		$scope.global = Global;
		$scope.package = {
			name: 'material'
		};
	}
]);
