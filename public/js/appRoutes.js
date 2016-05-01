angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider

    // home page
    .when('/', {
        templateUrl: 'public/views/home.html',
        controller: 'MainController'
    })

    // nerds page that will use the NerdController
    .when('/nerds', {
        templateUrl: 'public/views/nerd.html',
        controller: 'NerdController'
    });

$locationProvider.html5Mode(true);

}]);
