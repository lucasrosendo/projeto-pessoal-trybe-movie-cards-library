import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movieListInfo } = this.props;
    const { rating } = movieListInfo;
    return (
      <section className="movie-card movie-card-body ">
        <img className="movie-card-image" src={ movieListInfo.imagePath } alt={ movieListInfo.title } />
        <h2 className="movie-card-title">{ movieListInfo.title }</h2>
        <h4 className="movie-card-subtitle ">{ movieListInfo.subtitle}</h4>
        <p className="movie-card-storyline">{ movieListInfo.storyline }</p>
        <div className="movie-card-rating">
          <div className="rating"><Rating rating={ rating } /></div>
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movieListInfo: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
