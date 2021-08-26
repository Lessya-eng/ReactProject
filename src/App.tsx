import React from 'react';
import './App.css';
import { Header } from './components/molecules/Header';
import { Navigation } from './components/molecules/Navigation';
import { movie, trailer } from './mock'
import { MainCard } from './components/molecules/MainCard';
import { FoldedCard } from './components/molecules/FoldedCard';
import { FoldedCardTitle } from './components/molecules/FoldedCardTitle';
import { Title } from './components/atoms/Title';
import { TrailerCard } from './components/molecules/TrailerCard';
import { RatingCard } from './components/molecules/RatingCard';
import { SortCard } from './components/molecules/SortCard';
import { useState } from "react";


function App() {
  const selectedFilm = movie[1];
  const selectedTrailer = trailer;
  const [filteredFilm, setFilteredFilms] = useState(movie);
  const [searchValue, setSearchValue] = useState('');

  const onChangeHandler = (text: string) => {
    console.log({ text });
    setSearchValue(text);
    if (text.length > 2) {
      const newMovie = movie.filter(({ title }) => title.toLocaleLowerCase().trim().includes(searchValue.toLocaleLowerCase().trim()));
      setFilteredFilms(newMovie);
      return;
    };
    setFilteredFilms(movie);
  };
  const onClick = () => {
    console.log('onClick')
  };
  return (
    <div className="app">
      <nav className="app-nav">
        <Navigation />
      </nav>
      <main className="app-wrapper">
        <Header
          searchValue={searchValue}
          onChangeHandler={onChangeHandler}
          onClick={onClick} />
        <MainCard {...selectedFilm} />
        <div className="trailer-rating">
          <TrailerCard movie={selectedFilm} trailer={selectedTrailer} />
          <RatingCard />
        </div>
        <div className="folded-card">
          <div className="next-movie">
            <Title title={"Next movie"} />
          </div>
          {movie?.length ? <FoldedCard movie={filteredFilm} /> : (<p>No movie</p>)}
        </div>
        <div>
          <Title title={"Movie"} />
          <div>
            <SortCard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
