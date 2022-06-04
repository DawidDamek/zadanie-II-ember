import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CreateodalComponent extends Component {
  @tracked isShowCreateModal = false;

  @action
  onShowModal() {
    console.log('show');
    this.isShowCreateModal = true;
  }

  @action
  onHideModal() {
    console.log('hide');
    this.isShowCreateModal = false;
  }
}
