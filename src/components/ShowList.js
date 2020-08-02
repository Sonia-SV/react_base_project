import React from 'react';
import ShowItem from './ShowItem';
import '../stylesheets/ShowList.scss';

class ShowList extends React.Component {
  render() {
    const showItem = this.props.shows.map((eachShow) => {
      return (
        <li className="show__list__card" key={eachShow.id}>
          <ShowItem name={eachShow.name} url={eachShow.img} rating={eachShow.rating} status={eachShow.status} />
        </li>
      );
    });
    return (
      <div>
        <ul className="list__container">{showItem}</ul>
      </div>
    );
  }
}

export default ShowList;
