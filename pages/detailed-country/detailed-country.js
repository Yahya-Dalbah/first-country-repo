angular.module("myApp").component("detailedCountryPage", {
  templateUrl: "./pages/detailed-country/detailed-country.html",
  controller: [
    "$routeParams",
    "countryService",
    "$timeout",
    function ($routeParams, countryService, $timeout) {
      this.$onInit = function () {
        countryService
          .getCountryByName($routeParams.countryName)
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
              countryService.getCountryByCode(code)
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
