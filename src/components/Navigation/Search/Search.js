import React from "react"
import searchImg from "../../../images/search.png"
import classes from "./Search.module.css"

const search = props => (
    <div className={classes.SearchGroup}>
        <form action="" className={classes.Search}>
            <input
                type="text"
                className={classes.SearchInput}
                id="search__input"
                placeholder="검색"
            ></input>
            <button className={classes.SearchButton} >
                <img className={classes.SearchImg} src={searchImg} alt="search"></img>
            </button>
        </form>
        <div className={classes.SearchResult} id="search-result"></div>
    </div>
);

export default search;
