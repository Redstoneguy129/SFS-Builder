import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Blueprint from './pages/Blueprint';
import Solar from './pages/Solar';
import Settings from './pages/Settings';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/blueprint">
          <Blueprint/>
        </Route>
        <Route path="/solar">
          <Solar/>
        </Route>
        <Route path="/settings">
          <Settings/>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();