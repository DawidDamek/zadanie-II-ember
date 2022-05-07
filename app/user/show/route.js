import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserShowRoute extends Route {
  @service store;

  // destrukturyzacja parametrow
  async model({ id }) {
    const user = await this.store.findRecord('user', id);
    return user;
  }
}
