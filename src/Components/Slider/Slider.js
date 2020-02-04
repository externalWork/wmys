import React from 'react'
import { Link } from "react-router-dom"

import './Slider.scss'

export default function Slider (props) {
  return <div id="carousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      {
        props.sliderImages.map((item, index) => {
          const className = index === 0 ? 'active' : ''
          return <li key={ index } data-target="#carousel" data-slide-to={ index } className={ className } />
        })
      }
    </ol>
    <div className="carousel-inner">
      {
        props.sliderImages.map((item, index) => {
          return <div className={'carousel-item' + (index ? '' : ' active')} key={index}>
          <Link to={item.to}><img className="d-block w-100" src={'assets/image/' + item.image} alt="" /></Link>
        </div>
        })
      }
    </div>
  </div>
}