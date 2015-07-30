'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module,
	favicon = require('serve-favicon');

var Material = new Module('material');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Material.register(function(app, auth, database) {

	//We enable routing. By default the Package Object is passed to the routes
	Material.routes(app, auth, database);

	// assets for angular-material
	Material.aggregateAsset('css', '../lib/angular-material/angular-material.min.css', {
		global: true,
		absolute: false,
		group: 'header'
	});
	// 
	// Material.aggregateAsset('js', '../lib/angular/angular.min.js', {
	// 	absolute: false
	// });

	Material.aggregateAsset('js', '../lib/angular-aria/angular-aria.min.js', {
		absolute: false
	});

	Material.aggregateAsset('js', '../lib/angular-animate/angular-animate.min.js', {
		absolute: false
	});

	Material.aggregateAsset('js', '../lib/angular-material/angular-material.min.js', {
		absolute: false
	});

	// Set views path, template engine and default layout
	app.set('views', __dirname + '/server/views');

	// Setting the favicon and static folder
	app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));

	// Adding robots and humans txt
	app.useStatic(__dirname + '/public/assets/static');


	//We are adding a link to the main menu for all authenticated users
	Material.menus.add({
		title: 'Material Sample Page',
		link: 'material sample page',
		roles: ['authenticated'],
		menu: 'main'
	});

	Material.aggregateAsset('css', 'material.css');
	Material.angularDependencies(['ngMaterial']);

	/**
	  //Uncomment to use. Requires meanio@0.3.7 or above
	  // Save settings with callback
	  // Use this for saving data from administration pages
	  Material.settings({
	      'someSetting': 'some value'
	  }, function(err, settings) {
	      //you now have the settings object
	  });

	  // Another save settings example this time with no callback
	  // This writes over the last settings.
	  Material.settings({
	      'anotherSettings': 'some value'
	  });

	  // Get settings. Retrieves latest saved settigns
	  Material.settings(function(err, settings) {
	      //you now have the settings object
	  });
	  */

	return Material;
});
