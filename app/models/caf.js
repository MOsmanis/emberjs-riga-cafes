import Model, { attr } from '@ember-data/model';

export default class CafModel extends Model {
  @attr title;
  @attr district;
  @attr location;
  @attr category;
  @attr image;
  @attr description;

  get type() {
    return this.category;
  }
}
