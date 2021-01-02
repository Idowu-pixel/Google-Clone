import React, { useContext } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useGoogleSearch from "./useGoogleSearch";
import { Context } from "./Context";
import "./SearchPage.css";

function SearchPage() {
  const { term } = useContext(Context);
  const { data } = useGoogleSearch(term);

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButton />
          <div className="searchPage__options">
            <div className="searchPage__optionLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/">All</Link>
              </div>

              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/">Image</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/">Map</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/">More</Link>
              </div>
            </div>
            <div className="searchPage__optionRight">
              <Link>Settings</Link>
              <Link>Tools</Link>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__body">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a
                href={item.link}
                className="searchPage__resultTitle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
