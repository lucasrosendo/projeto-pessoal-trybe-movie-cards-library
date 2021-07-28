import React from 'react';
// import PropTypes from 'prop-types';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list ">
        {
          movies.map(
            (movieList) => <MovieCard key={ movieList.id } movieListInfo={ movieList } />)
        }
      </section>
    );
  }
}

export default MovieList;
