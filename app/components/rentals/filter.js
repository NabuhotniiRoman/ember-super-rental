import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class RentalsFilterComponent extends Component {
  @service dropdownState;
  @action handleInputChange(event) {
    let { rentals } = this.args;
    this.dropdownState.setSearchInputValue(event.target.value, rentals);
  }
}
