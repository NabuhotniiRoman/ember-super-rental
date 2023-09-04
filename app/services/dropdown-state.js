import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Evented from '@ember/object/evented';
import { later } from '@ember/runloop';

export default class InputServices extends Service.extend(Evented) {
  @tracked isDropdownOpen = false;
  @tracked selectedValue = 'All';
  @tracked filteredRentals = null;
  @tracked filteredByInput = null;
  @tracked searchInputValue = '';

  @action setSearchInputValue(value, rentals) {
    this.filteredByInput = rentals.filter((rental) =>
      rental.title.includes(value),
    );
    this.filteredRentals = null;
    this.selectedValue = 'All';
    this.isDropdownOpen = false;
    this.searchInputValue = value.trim();
  }
  @action toggleDropdownOff() {
    later(this, function () {
      this.isDropdownOpen = false;
    });
  }

  @action toggleDropdownOn() {
    later(this, function () {
      this.isDropdownOpen = true;
    });
  }

  @action setSelectedValue(value) {
    later(this, function () {
      this.selectedValue = value;
    });
  }

  @action setDefaultValue() {
    later(this, function () {
      this.selectedValue = 'All';
    });
  }

  @action setFilteredRentals(rentals) {
    this.filteredRentals = rentals;
    this.searchInputValue = '';
  }

  @action clearFilteredRentals() {
    later(this, function () {
      this.filteredRentals = null;
    });
  }
}
