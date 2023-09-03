import Component from '@glimmer/component';
import mapboxgl from 'mapbox-gl';
import ENV from 'super-rentals1/config/environment';

export default class ScalableMapComponent extends Component {
  constructor() {
    super(...arguments);
  }

  async initializeMap(element, lat, lng, zoom) {
    mapboxgl.accessToken = ENV.MAPBOX_ACCESS_TOKEN;
    const map = await new mapboxgl.Map({
      container: element,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      dragRotate: false,
    });

    map.on('load', async () => {
      await new mapboxgl.Marker({
        color: '#a50000',
        scale: 2,
        offset: [220, -260],
        anchor: 'bottom',
        draggable: false,
      })
        .setLngLat([lng, lat])
        .addTo(map);
    });
  }
}
