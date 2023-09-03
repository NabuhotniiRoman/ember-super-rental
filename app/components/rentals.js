import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalsComponent extends Component {
  @tracked query = '';
  @tracked isDropDownWasUsed = false;

  @action useDropDown() {
    console.log("work");
    this.isDropDownWasUsed = true;
  }
}
