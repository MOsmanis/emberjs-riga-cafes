import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CafesComponent extends Component {
  @tracked query = '';
}
