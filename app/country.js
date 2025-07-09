angular.module("myApp").controller("countryController", [
  "$scope",
  "$routeParams",
  "$http",
  function ($scope, $routeParams, $http) {
    $scope.message = "message";

    $http
      .get(`https://restcountries.com/v3.1/name/${$routeParams.countryName}`)
      .then((response) => {
        $scope.country = response.data[0];
      });
  },
]);
