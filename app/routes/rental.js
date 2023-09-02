import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {
  @service('store') store;

  async model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }
}
