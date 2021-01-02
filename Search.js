import React, { useState, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Context } from "./Context";
import "./Search.css";

function Search({ hideButton }) {
  const [input, setInput] = useState("");
  const { term, setTerm } = useContext(Context);
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    if (input) {
      setTerm(input);
    }
    history.push("/search");
  };

  console.log("what is this...", term);
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButton ? (
        <div className="search__button">
          <Button
            type="submit"
            className=""
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__button">
          <Button
            type="submit"
            className="hideButton"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="hideButton" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
