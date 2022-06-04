import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CreateodalComponent extends Component {
  @service store;
  @service session;
  @tracked isShowCreateModal = false;
  @tracked title = '';
  @tracked content = '';

  get hasEmptyFields() {
    return !(this.title && this.content);
  }

  @action
  onShowModal() {
    console.log('show');
    this.isShowCreateModal = true;
  }

  @action
  onHideModal() {
    console.log('hide');
    this.isShowCreateModal = false;
    this.clearFields();
  }

  @action
  onTitleChange(event) {
    this.title = event.target.value;
    console.log(this.title);
  }

  @action
  onContentChange(event) {
    this.content = event.target.value;
    console.log(this.content);
  }

  @action
  async onSave() {
    const post = {
      owner: this.session.currentUser,
      title: this.title,
      body: this.body,
    };
    const postModel = this.store.createRecord('post', post);
    await postModel.save();
    this.clearFields();
    this.isShowCreateModal = false;
  }

  clearFields() {
    this.title = '';
    this.content = '';
  }
}
