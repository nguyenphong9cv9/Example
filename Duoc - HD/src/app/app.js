require('angular');
require('angular-ui-router');
require('angular-aria');
require('angular-animate');
require('angular-material');
require('highcharts');
require('highcharts-ng');

require('./components/home/home.js');
require('./components/about/about.js');
require('./components/highchart/chart.js');

/***/

var app = angular.module('myApp', ['ui.router','ngMaterial','highcharts-ng','myApp.home','myApp.about','myApp.chart']);

app.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/");
	
	$stateProvider
	.state('home', {
		url: "/",
		views : {
			"" : {
				templateUrl:"app/components/home/home.html"
			},
			"header":{
				templateUrl:"app/shared/header/header.html"
			},
			"navigation":{
				templateUrl:"app/components/navigation/navigation.html"
			}
		}
	})
	.state('about', {
		url: "/about",
		views : {
			"" : {
				templateUrl:"app/components/about/about.html"
			},
			"header":{
				templateUrl:"app/shared/header/header.html"
			},
			"navigation":{
				templateUrl:"app/components/navigation/navigation.html"
			}
		}
	})
	.state('chart', {
		url: "/chart",
		views : {
			"" : {
				templateUrl:"app/components/highchart/highchart.html"
			},
			"header":{
				templateUrl:"app/shared/header/header.html"
			},
			"navigation":{
				templateUrl:"app/components/navigation/navigation.html"
			}
		}
	});



/*	$stateProvider
	.state('home', {
		url: "/",
		views : {
			"" : {
				templateUrl:"app/components/home/home.html"
			},
			"header@home":{
				templateUrl:"app/shared/header/header.html"
			}
		}
	})
	.state('about', {
		url: "/about",
		views : {
			"" : {
				templateUrl:"app/components/about/about.html"
			},
			"header@about":{
				templateUrl:"app/shared/header/header.html"
			}
		}
	});*/
});