import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import $ from 'jquery'
import './Slider.scss'

export default function Slider (props) {

  useEffect(() => {
    $('#carousel').carousel()
  },[])
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
            {
              item.to ? <Link to={item.to}><img className="d-block w-100" src={'/assets/image/' + item.image} alt="" /></Link> :
              <img className="d-block w-100" src={'/assets/image/' + item.image} alt="" />
            }
        </div>
        })
      }
    </div>
  </div>
}