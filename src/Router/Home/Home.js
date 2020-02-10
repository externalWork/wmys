import React from 'react'
import { BigTitle } from '../../Components/Title';
import { Slider } from '../../Components/Slider'
import { MoreButton } from '../../Components/Button';
import { Player, BigPlayButton } from 'video-react';
import { Link } from "react-router-dom"

import "../../../node_modules/video-react/dist/video-react.css";
import './Home.scss';
function Home() {
  const sliderImages = [
    {image: 'home/banner_1.jpeg', to: '/product/1'},
    {image: 'home/banner_2.jpeg', to: '/product/0'},
    {image: 'home/banner_3.jpeg', to: '/brand'},
    {image: 'home/banner_4.jpeg', to: '/about'}
  ];
  return <div className="home">
    <Slider sliderImages={sliderImages}/>
    <div className="container">
      <div className="eye">
        <BigTitle className="text-center mb-157" cn="眼部产品能量套餐" en="Eye nourishing energy package" />
        <div className="row">
          <div className="col-6 text-center content-box">
            {/* <div className="content-box">
              <div className="circle"></div>
              <div className="box-top">
                <span className="serial">01</span>
                <span className="box-title">眼部滋养能量套</span>
              </div>
              <div className="box-bottom">
                <a href="" className="more">了解更多</a>
                <a href="" className="arrow">→</a>
              </div>
            </div> */}
            <Link to="/product/0">
              <img src="/assets/image/home/01@2x.png" alt=""/>
              <span className="arrow">
                {/* <img src="/assets/image/home/arrow_light@2x.png" alt=""/> */}
              </span>
            </Link>
          </div>
          <div className="col-6 text-center content-box">
            <Link to="/product/1">
              <img src="/assets/image/home/02@2x.png" alt=""/>
              <span className="arrow arrow_2">
                {/* <img src="/assets/image/home/arrow_light@2x.png" alt=""/> */}
              </span>
            </Link>
            {/* <div className="content-box">
              <div className="circle"></div>
              <div className="box-top">
                <span className="serial">02</span>
                <span className="box-title">植萃眼部养护组合</span>
              </div>
              <div className="box-bottom">
                <a href="" className="more">了解更多</a>
                <a href="" className="arrow">→</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <div className="conservation">
      <div className="container">
        <div className="row">
          <div className="col-7 col-md-6">
            <img className="conservation_img" src="/assets/image/home/conservation_center@2x.png" alt=""/>
          </div>
          <div className="col-5 col-md-6">
            <BigTitle className="mb-60" cn="我们的品牌形象店" en="Introduction to our brand image store" />
            <MoreButton to="/brand" />
            <div className="flower text-right">
              <img src="/assets/image/home/flower@2x.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
      
    </div>

    <div className="container video">
      <BigTitle className="mb-92 text-center text-md-left" cn="发现雾美" en="Discover wumei" />
      <div className="row">
        <div className="col-12 col-md-6">
          <Player
            playsInline
            aspectRatio="16:9"
            // startTime={300}
            poster="/assets/image/home/poster_1.jpeg"
            src="/assets/video/video_1.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
          <div className="text-center small-font-size desc">招商会花絮</div>
        </div>

        <div className="col-12 col-md-6">
          <Player
            playsInline
            aspectRatio="16:9"
            // startTime={300}
            poster="/assets/image/home/poster_2.jpeg"
            src="/assets/video/video_2.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
          <div className="text-center small-font-size desc">众人一起见证产品效果</div>
        </div>

        <div className="col-12 col-md-6">
          <Player
            playsInline
            aspectRatio="16:9"
            // startTime={300}
            poster="/assets/image/home/poster_3.jpeg"
            src="/assets/video/video_3.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
          <div className="text-center small-font-size desc">视力防控公益活动走进校园</div>
        </div>

        <div className="col-12 col-md-6">
          <Player
            playsInline
            aspectRatio="16:9"
            // startTime={300}
            poster="/assets/image/home/poster_4.jpeg"
            src="/assets/video/video_4.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
          <div className="text-center small-font-size desc">视力防控公益活动走进校园</div>
        </div>
      </div>
    </div>

    <div className="container about-us">
      <div className="process">
        <span className="point point_1"></span>
        <span className="point point_2"></span>
        <span className="point point_3"></span>
        <span className="desc desc_1">2014年成立</span>
        <span className="desc desc_2">坐落于杭州</span>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 clear-padding">
          <img className="about-us-img" src="/assets/image/home/about_us@2x.png" alt=""/>
        </div>
        <div className="col-12 col-md-5 offset-md-1 about-us-right">
          <div className="about-us-right-box">
            <img src="/assets/image/home/position_img.jpeg" alt=""/>
            <div className="about-title">
              <span className="h2 bigger-font-size">关于我们</span>
              <hr className="hr" />
            </div>
            <p className="medium-font-size dark-color text-justify">杭州创胜生物科技有限公司，成立于2014年，总部设在美丽的杭州。雾美优视将养护青少年儿童视力健康为己任，以预防青少年近视为爆点，全家人的视力美护为核心。</p>
            <MoreButton to="/about" />
          </div>
        </div>
      </div>

    </div>
    
  </div>
}

export default Home