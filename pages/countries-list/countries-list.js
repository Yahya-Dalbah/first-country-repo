angular.module("myApp").component("countriesListPage", {
  templateUrl: "./pages/countries-list/countries-list.html",
  controller: [
    "$scope",
    "$http",
    function ($scope, $http) {
      $scope.regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
      $scope.selectedRegion = "";
      $scope.selectRegion = function (region) {
        $scope.selectedRegion = region;
      };
      $http
        .get(
          "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital"
        )
        .then((data) => {
          $scope.countries = data.data;
          console.log(data.data);
        });
    },
  ],
});
