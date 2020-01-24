import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './App.css';

import { Header} from './Components/Header'
import { Footer } from './Components/Footer'
import { Slider } from './Components/Slider'
import { Body } from './Components/Body';


export default function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Slider />
          <Body />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}