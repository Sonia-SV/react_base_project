import React from 'react';
import Filter from './Filter';
import '../stylesheets/Filter.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="title">The girly show</h1>
        <Filter
          searchText={this.props.searchText}
          searchChecked={this.props.searchChecked}
          filterText={this.props.filterText}
          checkValue={this.props.checkValue}
        />
      </header>
    );
  }
}

export default Header;
