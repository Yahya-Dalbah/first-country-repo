let myApp = angular.module("myApp", ["ngRoute"]);

myApp.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/", {
        templateUrl: "./views/list.html",
        controller: "listController",
      })
      .when("/countries/:countryName", {
        template: "<detailed-country-page></detailed-country-page>",
      })
      .otherwise({ redirectTo: "/" });
  },
]);

myApp.controller("listController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $scope.regions = ["Africa", "America", "Asia", "Europe", "Oceania"]
    $scope.selectedRegion = ""
    $scope.selectRegion = function(region){
      $scope.selectedRegion = region
    }
    $http
      .get(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital"
      )
      .then((data) => {
        $scope.countries = data.data;
        console.log(data.data)
      });
  },
]);
