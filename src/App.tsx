import React from 'react';
import './App.css';
/* import { Header } from './components/molecules/Header';
import { Navigation } from './components/molecules/Navigation';
import { movie, trailer } from './mock'
import { MainCard } from './components/molecules/MainCard';
import { FoldedCard } from './components/molecules/FoldedCard';
import { FoldedCardTitle } from './components/molecules/FoldedCardTitle';
import { Title } from './components/atoms/Title';
import { TrailerCard } from './components/molecules/TrailerCard';
import { RatingCard } from './components/molecules/RatingCard';
import { SortCard } from './components/organism/SortCard';
import { useState } from "react";
import { ButtonShowFilm } from './components/atoms/ButtonShowFilm';
import { useEffect } from "react"; */
import "./App.css";
import { Home } from "./components/pages/Home";
import { Film } from "./components/pages/Film";
import { Films } from "./components/pages/Films";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom";
import { Login } from "./components/pages/Login";
import { NotFound } from "./components/pages/NotFound";
import { PrivateRoute } from "./components/router/PrivateRouter"
import { PublicRoute } from "./components/router/PublicRouter";


function App() {
  const loggedIn = false;
  console.log({ loggedIn });
  if (!loggedIn) {
    <Redirect to="/login" />;
  }
  return (
    <Router>
      <div>
        {/*         <nav>
          <ul>
            <li>
              <Link className={"app"} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/film/:id">Film</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
          </ul>
        </nav> */}
      </div>
      <div>
        <Switch>
          <PublicRoute restricted={true} component={Home} path="/" exact />
          <PublicRoute restricted={true} component={Login} path="/login" exact />
          <PrivateRoute component={Film} path="/film/:id" exact />
          <PrivateRoute component={Films} path="/films" exact />
          <PublicRoute restricted={true} component={NotFound} exact />

          {/*           <Route exact path="/film/:id">
            <Film />
          </Route>
          <Route exact path="/films">
            <Films />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Title title={"Not found"} />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

