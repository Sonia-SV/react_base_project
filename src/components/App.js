import React from 'react';
import showList from '../services/showList';
//import fetchApiShows from '../services/fetchApiShows';
import Header from './Header';
import ShowList from './ShowList';
import '../stylesheets/App.scss';

const placeImg = 'https://via.placeholder.com/210x295.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: showList.map((shows) => {
        return {
          id: shows.show.id,
          name: shows.show.name,
          status: shows.show.status,
          rating: shows.show.rating.average !== null ? shows.show.rating.average : 'No info',
          img: shows.show.image !== null ? shows.show.image.medium : placeImg,
        };
      }),
      isChecked: false,
      filterText: '',
    };
    this.searchText = this.searchText.bind(this);
    this.searchChecked = this.searchChecked.bind(this);
  }

  // filterShows() {
  //   const shows = showList.map((shows) => {
  //     return {
  //       id: shows.show.id,
  //       name: shows.show.name,
  //       status: shows.show.status,
  //       rating: shows.show.rating.average,
  //       img: shows.show.image !== null ? shows.show.image.medium : placeImg,
  //     };
  //   });
  // }

  // fetchShows() {
  //   fetchApiShows().then((searchData) => {
  //     return searchData.map((shows) => {
  //       return this.setState({
  //         showInfo: {
  //           id: shows.show.id,
  //           name: shows.show.name,
  //           status: shows.show.status,
  //           rating: shows.show.rating.average,
  //           img: shows.show.image !== null ? shows.show.image.medium : placeImg,
  //         },
  //       });
  //     });
  //   });
  // }

  searchChecked(ev) {
    this.setState({ isChecked: ev.currentTarget.checked });
  }

  searchText(text) {
    this.setState({
      filterText: text,
    });
  }

  render() {
    const filteredShows = this.state.showInfo
      .filter((nameShow) => {
        return nameShow.name.toLowerCase().includes(this.state.filterText.toLowerCase());
      })
      .filter((runningShow) => {
        return this.state.isChecked === false ? true : runningShow.status === 'Running';
      });
    return (
      <div>
        <Header
          searchText={this.searchText}
          searchChecked={this.searchChecked}
          filterText={this.state.filterText}
          checkValue={this.state.isChecked}
        />
        <ShowList shows={filteredShows} />
      </div>
    );
  }
}

export default App;
