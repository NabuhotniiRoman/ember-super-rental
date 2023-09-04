import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class RentalsComponent extends Component {
  @service dropdownState;
  @tracked query = '';

  @action onChange(event) {
    this.query = event.target.value;
  }
}
