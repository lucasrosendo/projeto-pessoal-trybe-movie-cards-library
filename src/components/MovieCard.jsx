import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { rating } = movie;
    return (
      <section className="movie-card movie-card-body ">
        <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        <h4 className="movie-card-title">{ movie.title }</h4>
        <h5 className="movie-card-subtitle ">{ movie.subtitle}</h5>
        <p className="movie-card-storyline">{ movie.storyline }</p>
        <div className="movie-card-rating">
          <div className="rating"><Rating rating={ rating } /></div>
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
