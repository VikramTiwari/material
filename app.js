'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Material = new Module('material');

// added system package in dependency to sync package loading
Material.register(function(app, auth, database, circles, system) {

	app.set('views', __dirname + '/server/views');

	//We enable routing. By default the Package Object is passed to the routes
	Material.routes(app, auth, database, system);

	// include material css
	Material.aggregateAsset('css', '../lib/angular-material/angular-material.min.css', {
		absolute: false
	});

	// included js required for material
	Material.aggregateAsset('js', '../lib/angular-aria/angular-aria.min.js', {
		absolute: false
	});
	Material.aggregateAsset('js', '../lib/angular-animate/angular-animate.min.js', {
		absolute: false
	});
	Material.aggregateAsset('js', '../lib/angular-material/angular-material.min.js', {
		absolute: false
	});

	Material.angularDependencies(['ngMaterial']);

	return Material;
});
