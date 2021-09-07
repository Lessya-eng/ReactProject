import * as React from "react";
import { memo } from "react";
import "./index.css";
import { IMovie } from "../../../types"
import { FoldedPoster } from "../../atoms/FoldedPoster";
import { FoldedTitle } from "../../atoms/FoldedTitle";
import { FoldedYear } from "../../atoms/FoldedYear";
import { FoldedDescription } from "../../atoms/FoldedDescription";
import { Switch } from "../../atoms/Switch";
interface IFoldedCard {
    movie: IMovie[];
    bookmarksId: number[];
    onClickFilm: (id: number) => void;
    addBookmark: (id: number) => void;
    removeBookmark: (id: number) => void;
    viewedFilm: number[];
    onChange: (id: number, checked: boolean) => void;
    checked: boolean;
    text: string;
}

export const FoldedCard = memo(({ viewedFilm, movie, onClickFilm, addBookmark, removeBookmark, bookmarksId, checked, text, onChange }: IFoldedCard) => {
    return (
        <div className="folded-card-wrapper">
            {movie?.map((movie) => (
                <div key={movie.id}>
                    <div className="folded-film-card" onClick={() => { onClickFilm(movie.id) }}>
                        <FoldedPoster poster={movie.poster} />
                        <FoldedTitle title={movie.title} />
                        <FoldedYear year={movie.year} />
                        <FoldedDescription plot={movie.plot} />
                    </div>
                    <div className="folded-film-card-switch">
                        <div>
                            <Switch text={text} checked={viewedFilm.includes(movie.id)} onChange={() => onChange(movie.id, checked)} id={movie.id} />
                        </div>
                        <div>
                            {!bookmarksId?.find((id) => id === movie.id) ?
                                (<button className="folded-card-wrapper-btn" onClick={() => addBookmark(movie.id)}>Add</button>) :
                                (<button className="folded-card-wrapper-btn" onClick={() => removeBookmark(movie.id)} >Remove</button>)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
});

