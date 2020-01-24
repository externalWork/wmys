import React from 'react'
import { Link } from "react-router-dom"
import './Header.scss'

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <Link className="navbar-brand abs" to="/">
          <img src="assets/nav-logo@2x.png" className="navbar-logo" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="collapsingNavbar">
          <ul className="navbar-nav">
          {/* <Link className="nav-link" to={ header.url }>
            { header.title }
          </Link> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}