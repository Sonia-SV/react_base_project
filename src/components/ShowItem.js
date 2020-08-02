import React from 'react';
import '../stylesheets/ShowItem.scss';

class ShowItem extends React.Component {
  render() {
    const { url, name, rating, status } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <h4>Rating: {rating}</h4>
        <img src={url} alt={name} />
        <h3>Status: {status}</h3>
      </div>
    );
  }
}

export default ShowItem;
