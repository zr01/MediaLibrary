var mediaLibraryApp = angular.module('mediaLibraryApp', ['ngRoute', 'mainControllers', 'ngStorage']);

mediaLibraryApp.config(['$routeProvider', '$httpProvider',
	function($routeProvider, $httpProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'login.html',
				controller: 'CtrlLogin'
			})
			.when('/login', {
				templateUrl: 'login.html',
				controller: 'CtrlLogin'
			}).otherwise({
				redirectTo: '/'
			});
		
		$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
	}
]);