import React from "react";
import Home from "./Home";
import SearchPage from "./SearchPage";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
