import destinations from "./destinations";

const _time = 100;

const _fetch = (mockData, time = 0) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockData);
    }, time);
  });
};

export default {
  destinations: {
    async search({ country } = {}) {
      let results = destinations;
      if (country) results = results.filter(r => r.country == country);

      return _fetch(results, _time); // wait 1s before returning posts
    }
  }
};
