'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Material = new Module('material');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Material.register(function(app, auth, database, circles) {

	//We enable routing. By default the Package Object is passed to the routes
	Material.routes(app, auth, database);

	//We are adding a link to the main menu for all authenticated users
	Material.menus.add({
		title: 'Material',
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
