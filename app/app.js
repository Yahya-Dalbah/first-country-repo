let myApp = angular.module("myApp", ["ngRoute"]);

myApp.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/", { templateUrl: "./views/home.html" })
      .when("/countries", {
        templateUrl: "./views/list.html",
        controller: "listController",
      })
      .when("/countries/:countryName", {
        templateUrl: "./views/country.html",
        controller: "countryController",
      })
      .otherwise({ redirectTo: "/" });
  },
]);

myApp.controller("listController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http
      .get("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((data) => {
        $scope.countries = data.data;
      });
  },
]);
