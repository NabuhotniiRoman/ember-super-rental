import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CustomDropdown extends Component {
  @service dropdownState;

  @action toggleDropdown(value) {
    if (this.dropdownState.isDropdownOpen) {
      this.dropdownState.toggleDropdownOff();
    } else {
      this.dropdownState.toggleDropdownOn();
    }

    let { rentals } = this.args;
    const locations = rentals.map((rental) => rental.city);
    if (locations.includes(value) || value === 'All') {
      this.dropdownState.setSelectedValue(value);
    }
  }

  get allRentalLocations() {
    let { rentals } = this.args;
    const locations = rentals.map((rental) => rental.city);
    locations.unshift('All');
    return locations;
  }

  getRentalsLocations() {
    let { rentals } = this.args;

    rentals = rentals.filter((rental) => rental.city === this.dropdownState.selectedValue);

    return rentals;
  }
}
