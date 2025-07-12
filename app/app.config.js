angular.module("myApp", ["ngRoute"]).config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/", {
        template: "<countries-list-page></countries-list-page>",
      })
      .when("/countries/:countryName", {
        template: "<detailed-country-page></detailed-country-page>",
      })
      .otherwise({ redirectTo: "/" });
  },
]);
