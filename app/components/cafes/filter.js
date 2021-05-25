import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { cafes, query } = this.args;

    if (query) {
      cafes = cafes.filter((cafe) => cafe.title.includes(query));
    }

    return cafes;
  }
}
