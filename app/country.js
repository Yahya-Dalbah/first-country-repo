angular.module("myApp").component("countryPage", {
  bindings: {
    country: '<'
  },
  templateUrl: "./views/country.html",
  controller: [
    "$routeParams",
    "$http",
    function ($routeParams, $http) {
    //   this.$onInit = function () {
    //     $http
    //       .get(
    //         `https://restcountries.com/v3.1/name/${$routeParams.countryName}`
    //       )
    //       .then((response) => {
    //         this.country = response.data[0];
    //       });
    //   };
    },
  ],
});
