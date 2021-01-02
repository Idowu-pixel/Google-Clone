import React from "react";
import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/">About</Link>
          <Link to="/">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/">Gmail</Link>
          <Link to="/">Image</Link>
          <AppsIcon />
          <Avatar src={require("./image/banjo.jpg")} alt="" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          {" "}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;

//API_KEY = AIzaSyA-Mb8xzgqL7brLjCO1ZPN3YyXljeGKl8w
//CONTEXT_KEY = "f0ec0ea4a0d04d971";
