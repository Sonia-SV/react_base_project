import React from 'react';
import '../stylesheets/Filter.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(ev) {
    this.props.searchChecked(ev);
  }

  handleSearchText(ev) {
    this.props.searchText(ev.currentTarget.value);
  }
  render() {
    return (
      <form className="filter__box">
        <label htmlFor="name">
          Filtra por nombre:
          <input id="name" type="text" value={this.props.filterText} onChange={this.handleSearchText} />
        </label>
        <label>
          On air?
          <input type="checkbox" id="runing" onChange={this.handleChecked} checked={this.props.checkValue} />
        </label>
      </form>
    );
  }
}

export default Filter;
