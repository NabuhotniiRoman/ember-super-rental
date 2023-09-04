import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CustomDropdown extends Component {
  @service dropdownState;
  @tracked filteredItems;

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

  @action getRentalsLocations(value) {
    let { rentals } = this.args;
    this.toggleDropdown(value);
    if (value === 'All') {
      this.dropdownState.setFilteredRentals(rentals);
    } else {
      rentals = rentals.filter((rental) => rental.city === value);
      this.dropdownState.setFilteredRentals(rentals);
    }
  }

  get allRentalLocations() {
    let { rentals } = this.args;
    const locations = rentals.map((rental) => rental.city);
    locations.unshift('All');
    return locations;
  }
}
