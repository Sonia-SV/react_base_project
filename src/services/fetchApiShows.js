const showInfo = {};
const placeImg = 'https://via.placeholder.com/126x177.png';

const fetchApiShows = () => {
  return fetch('http://api.tvmaze.com/search/shows?q=girls').then((response) => response.json());
};

export default fetchApiShows;
