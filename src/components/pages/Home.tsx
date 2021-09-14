import React, { useEffect, useState } from "react";
import { Title } from "../atoms/Title";
import { useParams } from "react-router-dom";
import { movie } from "../../mock";
import { IMovie } from "../../types/index";
import { MainCard } from "../molecules/MainCard";
import { Navigation } from "../molecules/Navigation";
import { Header } from "../molecules/Header";
import { SortCard } from "../organism/SortCard";

export const Home = () => {
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
                {isShowFilter ? (
                    < SortCard
                        sortSettings={sortSettings}
                        onClick={handlerSorting}
                        searchValue={searchValue}
                        onChangeHandler={onChangeHandler}
                    />
                ) : null}
                <main>
                    <Title title={"Use filter or search to choose movie (please go to next tab)"} />
                </main>
            </main>
        </div>
    );
};