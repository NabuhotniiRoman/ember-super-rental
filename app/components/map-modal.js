import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MapModalComponent extends Component {
  @service dropdownState;

  @action onToggle() {
    this.isToggled = !this.isToggled;
  }
}
