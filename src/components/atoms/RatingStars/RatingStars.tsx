import * as React from "react";
import { memo } from "react";
import "./index.css";


export const RatingStars = memo(() => {
    return (
        <div className="rating-stars-wrapper">
            <div className="simple-rating">
                <div className="simple-rating-items">
                    <input id="simple-rating-10" className="simple-rating-item" name="simple-rating" type="radio" value="10"></input>
                    <label htmlFor="simple-rating-10" className="simple-rating-label"></label>
                    <input id="simple-rating-9" className="simple-rating-item" name="simple-rating" type="radio" value="9"></input>
                    <label htmlFor="simple-rating-9" className="simple-rating-label"></label>
                    <input id="simple-rating-8" className="simple-rating-item" name="simple-rating" type="radio" value="8"></input>
                    <label htmlFor="simple-rating-8" className="simple-rating-label"></label>
                    <input id="simple-rating-7" className="simple-rating-item" name="simple-rating" type="radio" value="7"></input>
                    <label htmlFor="simple-rating-7" className="simple-rating-label"></label>
                    <input id="simple-rating-6" className="simple-rating-item" name="simple-rating" type="radio" value="6"></input>
                    <label htmlFor="simple-rating-6" className="simple-rating-label"></label>
                    <input id="simple-rating-5" className="simple-rating-item" name="simple-rating" type="radio" value="5"></input>
                    <label htmlFor="simple-rating-5" className="simple-rating-label"></label>
                    <input id="simple-rating-4" className="simple-rating-item" name="simple-rating" type="radio" value="4"></input>
                    <label htmlFor="simple-rating-4" className="simple-rating-label"></label>
                    <input id="simple-rating-3" className="simple-rating-item" name="simple-rating" type="radio" value="3"></input>
                    <label htmlFor="simple-rating-3" className="simple-rating-label"></label>
                    <input id="simple-rating-2" className="simple-rating-item" name="simple-rating" type="radio" value="2"></input>
                    <label htmlFor="simple-rating-2" className="simple-rating-label"></label>
                    <input id="simple-rating-1" className="simple-rating-item" name="simple-rating" type="radio" value="1"></input>
                    <label htmlFor="simple-rating-1" className="simple-rating-label"></label>
                </div>
            </div>
        </div>
    )
});
