'use strict';

angular.module('mean.material').factory('Menus', ['$resource',
	function($resource) {
		return $resource('api/admin/menu/:name', {
			name: '@name',
			defaultMenu: '@defaultMenu'
		});
	}
]);
