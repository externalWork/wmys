import React from 'react';
import { HashRouter as Router, Switch, Route,  Redirect } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './App.css';

import { ScrollToTop } from './Components/ScrollToTop';
import { Header} from './Components/Header'
import { Footer } from './Components/Footer'
// import { Slider } from './Components/Slider'

import { Home } from './Router/Home';
import { Product } from './Router/Product'; 
import { Welfare } from './Router/Welfare';
import { Brand } from './Router/Brand';
import { About } from './Router/About';
import { descriptions } from '../public/assets/json/descriptions.json'
const routes = [
  {
    path: "/",
    component: Home,
    title: "雾美优视为护眼而生！",
    content: descriptions[0]
  },
  {
    path: ["/product/:name", "/product"],
    component: Product,
    title: "雾美优视套盒",
    content: descriptions[1]
  },
  {
    path: "/welfare",
    component: Welfare,
    title: "雾美优视关爱儿童视力健康，致力于给孩子一个明亮的未来。",
    content: descriptions[2]
  },
  {
    path: "/brand",
    component: Brand,
    title: "雾美优视品牌形象店，全国招商，期待您的加入。",
    content: descriptions[3]
  },
  {
    path: "/about",
    component: About,
    title: "雾美优视您身边的视力养护专家。",
    content: descriptions[4]
  }
]


export default function App() {
  
  return (
    <Router className="App">
      <ScrollToTop>
        <Header />
        <Switch>
          {
            routes.map((route, i) => {
              return  <Route exact={route.path === '/' ? true : false} key={i} path={route.path} render={props => {
                document.title = route.title || "雾美优视";
                document.querySelector('meta[name=description]').content = route.content;
                return <route.component />
              }} />
            })
          }
          <Redirect to="/" />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}
