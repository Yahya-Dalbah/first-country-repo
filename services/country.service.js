angular.module("myApp").factory("countriesService", [
  "$http",
  function ($http) {
    function getAllCountries() {
      return $http.get(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital"
      );
    }
    function getCountryByName(countryName) {
      return $http.get(`https://restcountries.com/v3.1/name/${countryName}`);
    }
    function getCountryByCode(countryCode) {
      return $http.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    }
    const service = {
      getAllCountries,
      getCountryByName,
      getCountryByCode
    };
    return service;
  },
]);
