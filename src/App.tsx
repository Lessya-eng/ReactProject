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
import { useEffect } from "react";


function App() {
  //Поисковик
  /* const selectedFilm = movie[1]; */
  const selectedTrailer = trailer;

  const [filteredFilm, setFilteredFilms] = useState(movie.slice(0, 1));
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (searchValue.length > 2) {
      const newMovie = movie.filter(({ title }) => title.toLocaleLowerCase().trim().includes(searchValue.toLocaleLowerCase().trim()));
      setFilteredFilms(newMovie);
      return;
    };
    if (searchValue.length) {
      setFilteredFilms(movie);
    }
  }, [searchValue, setSearchValue]);

  const onChangeHandler = (text: string) => {
    console.log({ text });
    setSearchValue(text);
    //в useEffect
    /* if (text.length > 2) {
        const newMovie = movie.filter(({ title }) => title.toLocaleLowerCase().trim().includes(searchValue.toLocaleLowerCase().trim()));
        setFilteredFilms(newMovie);
        return;
      };
      setFilteredFilms(movie); */
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
    setFilteredFilms(
      [...movie]
        .slice(0, filteredFilm.length + 1)
    );
  };
  console.log("clicked")

  //Фильтр по странам

  //Раскрываем карточку по клику
  const [selectedFilm, setSelectedFilm] = useState(movie[0]);


  const onClickFilm = (id: number) => {
    /* console.log({ id }); */
    const newMovie = movie.find(({ id: filmId }) => id === filmId)
    /*   const newMovie = movie.find(({ movie }) => id === movie.id) */
    if (newMovie) {
      setSelectedFilm(newMovie);
    }
  };

  //Добавить / удалить, используем useState, useEffect, localStorage
  const [bookmarksId, setBookmarksId] = useState<number[]>([]); //определили тип для useState
  console.log({ bookmarksId });


  const addBookmark = (id: number) => {
    console.log("addBookmark");
    const hasId = bookmarksId.find((currentId) => currentId === id);
    if (hasId) {
      return;
    }
    const newBookmarksId = [...bookmarksId, id];
    setBookmarksId(newBookmarksId);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarksId))
  };

  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarks");
    if (savedBookmarks) {
      setBookmarksId(JSON.parse(savedBookmarks))
    };
    const savedViewedFilms = localStorage.getItem("viewedFilm")
    if (savedViewedFilms) {
      setViewedFilm(JSON.parse(savedViewedFilms))
    }
    return () => {

    };
  }, [])

  const removeBookmark = (id: number) => {
    console.log("removeBookmark");
    const filteredBookmarks = bookmarksId.filter((currentId) => currentId !== id);
    setBookmarksId(filteredBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(filteredBookmarks))
  };

  //Метка просмотрено/непосмотрено
  const [viewedFilm, setViewedFilm] = useState<number[]>([]);
  const [isViewedChecked, setIsViewedChecked] = useState(false);
  console.log({ viewedFilm });
  const onChangeSwitcher = (id: number, checked: boolean) => {
    setIsViewedChecked(!isViewedChecked);
    const newViewedFilm = checked ? viewedFilm.filter((currentId) => currentId !== id) : [...viewedFilm, id];

    setViewedFilm(newViewedFilm);
    localStorage.setItem("viewedFilm", JSON.stringify(newViewedFilm));
  }

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
            < SortCard
              sortSettings={sortSettings}
              onClick={handlerSorting}
              searchValue={searchValue}
              onChangeHandler={onChangeHandler} />
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
          {movie?.length ? <FoldedCard movie={filteredFilm}
            onClickFilm={onClickFilm}
            addBookmark={addBookmark}
            removeBookmark={removeBookmark}
            bookmarksId={bookmarksId}
            viewedFilm={viewedFilm}
            text={"Просмотрено"}
            onChange={onChangeSwitcher}
            checked={isViewedChecked}
          /> : (<p>No movie</p>)}

        </div>
        <MainCard {...selectedFilm} />
        {/*     
        <div className="trailer-rating">
          <TrailerCard movie={selectedFilm} trailer={selectedTrailer} />
          <RatingCard />
        </div> */}
      </main>
    </div>
  );
}

export default App;
