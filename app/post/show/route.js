import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostShowRoute extends Route {
  @service store;

  async model({ id }) {
    const user = await this.store.findRecord('post', id);
    return user;
  }
}
