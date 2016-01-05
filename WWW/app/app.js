'use strict';

var app = angular.module('carpoolApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'angularSpinner']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "./app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "app/views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "views/signup.html"
    });

     $routeProvider.when("/tripSearch", {
        controller: "tripSearchModalContrller"
    });
    
    $routeProvider.when("/tripResult", {
       controller: "tripResultController",
       templateUrl: "views/tripSearchResult.html"
    });
    
    $routeProvider.when("/tripShareView", {
        controller: "tripShareViewController",
        templateUrl: "views/tripShareView.html"
    });
    
    $routeProvider.when("/shareRide", {
        controller: "shareRideController",
        templateUrl: "views/shareRideView.html"
    });
    
   $routeProvider.otherwise({ redirectTo: "/home" });

});

var serviceBase = 'http://carvana.azurewebsites.net/';
    //'http://localhost:58077/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'carpoolApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
   
});



app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);


