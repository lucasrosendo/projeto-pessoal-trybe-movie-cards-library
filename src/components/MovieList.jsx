import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list ">
        {
          movies.map(
            (movieList) => <MovieCard key={ movieList.id } movie={ movieList } />,
          )
        }
      </section>
    );
  }
}

export default MovieList;
