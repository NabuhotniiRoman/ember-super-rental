import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Weather extends Component {
  @tracked airQualityInfo;
  @tracked weatherQualityInfo;

  constructor() {
    super(...arguments);
    this.airQuality();
    this.getWeather();
  }

  airQuality() {
    const { city } = this.args;
    try {
      fetch(
        'https://api.openaq.org/v2/cities?limit=3000&page=1&offset=0&sort=asc&order_by=city',
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          return data.results.find((item) => item.city.includes(city));
        })
        .then((location) => {
          fetch(`https://api.openaq.org/v2/latest/${location.locations}`)
            .then((r) => {
              return r.json();
            })
            .then((data) => {
              this.airQualityInfo = data.results[0];
            });
        });
    } catch (e) {
      console.error(e);
    }
  }

  getWeather() {
    const { city } = this.args;
    const formattedName = city.replace(/\s+/g, '').toLowerCase();
    try {
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=ff729317f6f840eaaf3142549230409&q=${formattedName}`,
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => (this.weatherQualityInfo = data));
    } catch (e) {
      console.error(e);
    }
  }
}
