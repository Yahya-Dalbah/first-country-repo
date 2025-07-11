angular.module("myApp").component("countryCard", {
  bindings: {
    country: "<",
  },
  templateUrl: "./components/country-card/country-card.html",
});
