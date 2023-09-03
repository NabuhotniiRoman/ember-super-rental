import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Evented from '@ember/object/evented';
import { later } from '@ember/runloop';

export default class DropdownStateService extends Service.extend(Evented) {
  @tracked isDropdownOpen = false;

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
}
