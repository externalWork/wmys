import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './Header.scss'

export default function Header(props) {
  const [ show, setShow ] = useState(false)

  // useEffect(() => {
    
  // });
 
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="assets/image/logo@2x.png" className="navbar-logo" alt="" />
        </Link>
        <button onClick={() => setShow(!show)} className={'navbar-toggler' + (show ? ' navbar-close' : '')} type="button"  data-toggle="collapse" data-target="#collapsingNavbar">
          {
            show ? <img className="cross" src="assets/image/cross@2x.png" alt="" /> : <span className="navbar-toggler-icon"></span>
          }
        </button>
        <div className="navbar-collapse collapse" id="collapsingNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">首页</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">产品中心</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/welfare">公益活动</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/brand">品牌加盟</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">关于我们</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}