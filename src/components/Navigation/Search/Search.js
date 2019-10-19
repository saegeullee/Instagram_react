import React from "react"
import SearchItem from "./SearchItem/SearchItem"
import searchImg from "../../../images/search.png"
import classes from "./Search.module.css"

const search = props => {

    let searchResults = []

    searchResults = props.users.map(el => <SearchItem name={el.name}/>)

    return (
        <div className={classes.SearchGroup}>
            <div className={classes.Search}>
                <input
                    type="text"
                    className={classes.SearchInput}
                    onChange={props.searched}
                    placeholder="검색"></input>
                <button className={classes.SearchButton} >
                    <img className={classes.SearchImg} src={searchImg} alt="search"></img>
                </button>
            </div>
            <div className={props.isSearching ? classes.SearchResult : classes.SearchResultNone}>
                {searchResults}
            </div>
        </div>
    )
}

export default search;
