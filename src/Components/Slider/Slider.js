import React from 'react'
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
        props.sliderImages.map((image, index) => {
          return <div className={'carousel-item' + (index ? '' : ' active')} key={index}>
          <img className="d-block w-100" src={'assets/image/' + image} alt="" />
        </div>
        })
      }
    </div>
  </div>
}