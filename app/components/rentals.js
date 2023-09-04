import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RentalsComponent extends Component {
  @service dropdownState;

  @tracked query = '';
  @tracked isDropDownWasUsed = false;
  @action useDropDown() {
    this.isDropDownWasUsed = true;
  }
}
