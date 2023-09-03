import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class RentalsFilterComponent extends Component {
  @service dropdownState;
  get results() {
    let { rentals, query, useDropDown } = this.args;

    if (query) {
      rentals = rentals.filter((rental) => rental.title.includes(query));
      this.dropdownState.toggleDropdownOff();
      this.dropdownState.setDefaultValue();
      useDropDown();
    }

    return rentals;
  }
}
