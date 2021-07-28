import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <body>
      <header className="movie-card-header">
        <Header />
      </header>

      <section>
        <MovieList />
      </section>
    </body>
  );
}

export default App;
