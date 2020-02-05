import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import './Header.scss'

export default function Header(props) {
  const [ show, setShow ] = useState(false)
  show ? document.querySelector('body').classList.add('hidden') : document.querySelector('body').classList.remove('hidden')
  
  function navigate() {
    setShow(false)
    document.querySelector('body').classList.remove('hidden')
    document.querySelector('.navbar-collapse').classList.remove('show');
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/assets/image/logo@2x.png" className="navbar-logo" alt="" />
        </Link>
        <button onClick={() => setShow(!show)} className={'navbar-toggler' + (show ? ' navbar-close' : '')} type="button"  data-toggle="collapse" data-target="#collapsingNavbar">
          {
            show ? <img className="cross" src="/assets/image/cross@2x.png" alt="" /> : <span className="navbar-toggler-icon"></span>
          }
        </button>
        <div className="navbar-collapse collapse" id="collapsingNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link small-font-size" activeClassName="active" exact to="/" onClick={() => navigate()}>首页<div className="line" /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link small-font-size" activeClassName="active" to="/product/1" onClick={() => navigate()}>产品中心<div className="line" /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link small-font-size" activeClassName="active" to="/welfare" onClick={() => navigate()}>公益活动<div className="line" /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link small-font-size" activeClassName="active" to="/brand" onClick={() => navigate()}>品牌加盟<div className="line" /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link small-font-size" activeClassName="active" to="/about" onClick={() => navigate()}>关于我们<div className="line" /></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}