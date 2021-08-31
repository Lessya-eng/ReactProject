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
import { SortCard } from './components/organism/SortCard';
import { useState } from "react";
import { ButtonShowFilm } from './components/atoms/ButtonShowFilm';


function App() {
  //Поисковик
  const selectedFilm = movie[1];
  const selectedTrailer = trailer;
  /*  const countries = массивуникальных ингредиентов, прокинуть в фильтр пэйдж сантрис = кантрис через пропсы , по массиву пройти map , onChance  и через target value*/

  const [filteredFilm, setFilteredFilms] = useState(movie.slice(0, 1));
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

  //Появление фильтра и сортировка по рейтингу и году
  const [isShowFilter, setIsShowFilter] = useState(false);
  const clickFilter = () => {
    setIsShowFilter(!isShowFilter);
  };
  const defaultSortSettings = [{
    title: "Rating",
    field: "imdbRating",
    isActive: false,
  },
  {
    title: "Year",
    field: "year",
    isActive: false,
  }
  ];
  const [sortSettings, setSortSettings] = useState(defaultSortSettings)
  const handlerSorting = (field: string) => {
    console.log("handlerSorting", { field });

    const firstFilm = movie[0] as any;

    const newSettings = sortSettings.map((setting) => ({
      ...setting,
      isActive: setting.field === field,
    }));
    setSortSettings(newSettings);

    if (typeof firstFilm[field] === "number") {
      const newFilms = [...movie].sort((a: any, b: any) => a[field] - b[field]);
      setFilteredFilms(newFilms);
      return;
    }
  };

  //Пагинация с кнопкой
  const onClickNextFilm = () => {
    const fieldFilm = sortSettings.reduce((acc, { isActive, field }) => {
      return isActive ? field : acc;
    }, "");
    setFilteredFilms(
      [...movie]
        .sort((a: any, b: any) => a[fieldFilm] - b[fieldFilm])
        .slice(0, filteredFilm.length + 1)
    );
  };
  console.log("clicked")
  return (
    <div className="app">
      <nav className="app-nav">
        <Navigation />
      </nav>
      <main className="app-wrapper">
        <Header
          searchValue={searchValue}
          onChangeHandler={onChangeHandler}
          onClick={onClick}
          clickFilter={clickFilter} />
        <div>
          {isShowFilter ? (
            < SortCard sortSettings={sortSettings} onClick={handlerSorting} />
          ) : null}
        </div>
        <div className="folded-card">
          <div className="next-movie">
            {filteredFilm.length !== movie.length &&
              (< ButtonShowFilm
                title={"Show Film"}
                isActive={true}
                onClickNextFilm={onClickNextFilm} />)}
          </div>
          {movie?.length ? <FoldedCard movie={filteredFilm} /> : (<p>No movie</p>)}
        </div>
        {/*         <MainCard {...selectedFilm} />
        <div className="trailer-rating">
          <TrailerCard movie={selectedFilm} trailer={selectedTrailer} />
          <RatingCard />
        </div> */}
      </main>
    </div>
  );
}

export default App;
