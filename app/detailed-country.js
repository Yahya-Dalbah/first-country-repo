angular.module("myApp").component("detailedCountryPage", {
  templateUrl: "./views/detailed-country.html",
  controller: [
    "$routeParams",
    "$http",
    "$timeout",
    function ($routeParams, $http, $timeout) {
      this.$onInit = function () {
        $http
          .get(`https://restcountries.com/v3.1/name/Belgium`)
          .then((response) => {
            const self = this;
            self.country = response.data[0];
            self.neighbors = [];
            console.log(self.country);
            self.nativeName = Object.values(
              self.country.name.nativeName
            )[0].common;
            self.currencies = Object.values(self.country.currencies);
            self.languages = Object.values(self.country.languages);
            let bordersCodes = self.country.borders;
            let promises = bordersCodes.map((code) =>
              $http.get(`https://restcountries.com/v3.1/alpha/${code}`)
            );
            Promise.all(promises).then((countries) => {
              $timeout(() => {
                self.neighbors = countries.map(
                  (country) => country.data[0].name.common
                );
              });
            });
          });
      };
    },
  ],
});
