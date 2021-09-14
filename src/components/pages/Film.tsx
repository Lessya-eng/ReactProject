import React, { useEffect, useState } from "react";
import { Title } from "../atoms/Title";
import { movie, trailer } from "../../mock";
import { IMovie } from "../../types/index";
import { MainCard } from "../molecules/MainCard";
import { Navigation } from "../molecules/Navigation";
import { Header } from "../molecules/Header";
import { TrailerCard } from "../molecules/TrailerCard";
import { Rating } from "../atoms/Rating";
import { RatingCard } from "../molecules/RatingCard";
import { Link, useParams } from "react-router-dom";



export const Film = () => {
    const [selectedFilm, setSelectedFilm] = useState<IMovie | null>(null);
    const selectedTrailer = trailer;
    const params = useParams() as any;
    console.log({ params });
    useEffect(() => {
        if (params?.id) {
            const foundFilm = movie.find(
                ({ id: filmId }) => filmId === Number(params?.id)
            );
            /* console.log({ foundFilm, id: params?.id, movie }); */
            if (foundFilm) {
                setSelectedFilm(foundFilm);
                return;
            }
            setSelectedFilm(null);
        }
        return () => { };
    }, [params?.id]);

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
    }
    const onClick = () => {
        console.log('onClick')
    };
    const [isShowFilter, setIsShowFilter] = useState(false);
    const clickFilter = () => {
        setIsShowFilter(!isShowFilter);
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
                    onClick={onClick}
                    clickFilter={clickFilter} />
                <main>
                    {selectedFilm ?

                        <section>
                            <MainCard {...selectedFilm} />
                            <div className="trailer-rating">
                                <TrailerCard movie={selectedFilm} trailer={selectedTrailer} />
                                <RatingCard />
                            </div>
                        </section>
                        : <Title title={"No selected movies, please go to next tab"} />}
                </main>
            </main>
        </div >
    );
}
