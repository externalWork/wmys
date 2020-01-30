import React from 'react'
import './Slider.scss'

// const constructSliders = banners => {
//   return banners.map((item, index) => {
//     let className = 'carousel-item'
//     if (index === 0) {
//       className += ' active'
//     }
//     if (item.link) {
//       return <div className={ className } key={ index }>
//         <a href={ item.link } target={ item.new_tab ? '_blank' : '_self' }>
//           <img className="d-block w-100" src="" alt="" />
//         </a>
//       </div>
//     } else {
//       return <div className={ className } key={ index }>
//         <img className="d-block w-100" src="" alt="" />
//       </div>
//     }
//   })
// }

// const constructDots = banners => (
//   banners.map((item, index) => {
//     const className = index === 0 ? 'active' : ''
//     return <li key={ index } data-target="#carousel" data-slide-to={ index } className={ className } />
//   })
// )

export default function Slider (props) {

  // const slider = constructSliders(banners)
  // const dots = constructDots(banners)

  return <div id="carousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" className="active" />
      <li data-target="#carousel" data-slide-to="1" />
      <li data-target="#carousel" data-slide-to="2" />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="assets/image/banner@2x.png" alt="" />
      </div>

      <div className="carousel-item">
        <img className="d-block w-100" src="assets/image/banner@2x.png" alt="" />
      </div>

      <div className="carousel-item">
        <img className="d-block w-100" src="assets/image/banner@2x.png" alt="" />
      </div>
    </div>
  </div>
}