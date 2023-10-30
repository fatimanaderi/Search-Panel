import { country } from "../data/country.js";

const findCountry = (cca2) => {
  let filteredCountry = country.filter((item) => item.cca2 == cca2);
  return filteredCountry[0];
};

export default findCountry;
