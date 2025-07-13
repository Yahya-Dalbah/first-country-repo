angular.module("myApp").component("countriesListPage", {
  templateUrl: "./pages/countries-list/countries-list.html",
  controller: [
    //this array is better for minification (instead of writing the function alone)
    "$scope",
    "countriesService",
    function ($scope,  countriesService) {
      $scope.regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
      $scope.selectedRegion = "";
      $scope.selectRegion = function (region) {
        $scope.selectedRegion = region;
      };
       countriesService.getAllCountries().then((data) => {
        $scope.countries = data.data;
        console.log(data.data);
      });
    },
  ],
});
