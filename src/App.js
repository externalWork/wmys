import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './App.css';

import { Header} from './Components/Header'
import { Footer } from './Components/Footer'
// import { Slider } from './Components/Slider'

import { Home } from './Router/Home';
import { Product } from './Router/Product'; 
import { Welfare } from './Router/Welfare';
import { Brand } from './Router/Brand';
import { About } from './Router/About';


export default function App() {
  return (
    <Router className="App">
      <Header />
      <div className="router">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/product">
            <Product />
          </Route>

          <Route path="/welfare">
            <Welfare />
          </Route>

          <Route path="/brand">
            <Brand />
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      
      <Footer />
    </Router>
  );
}