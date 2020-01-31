import React from 'react'
import { BigTitle } from '../../Components/Title';
import { Slider } from '../../Components/Slider'
import { MoreButton } from '../../Components/Button';
import { Player, BigPlayButton } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import './Home.scss';
function Home() {
  return <div className="home">
    <Slider />
    <div className="container">
      <div className="eye">
        <BigTitle className="text-center" margin="0 0 150px 0" cn="眼部产品能量套餐" en="Eye nourishing energy package" />
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

              <img src="assets/image/01@2x.png" alt=""/>
              <a href="" className="arrow">
                {/* <img src="assets/image/arrow_light@2x.png" alt=""/> */}
              </a>
            
          </div>
          <div className="col-6 text-center content-box">
            <img src="assets/image/01@2x.png" alt=""/>
            <a href="" className="arrow">
              {/* <img src="assets/image/arrow_light@2x.png" alt=""/> */}
            </a>
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
          <div className="col-12 col-lg-6 mb-100">
            <img src="assets/image/conservation_center@2x.png" alt=""/>
          </div>
          <div className="col-12 col-lg-6 text-center text-lg-left mb-100">
            <BigTitle margin="0 0 60px 0" cn="我们的品牌形象店" en="Introduction to our brand image store" />
            <MoreButton href="" />
          </div>
        </div>
      </div>
      
    </div>

    <div className="container video">
      <BigTitle margin="0 0 90px 0" cn="发现雾美" en="Eye nourishing energy package" />
      <div className="row">
        <div className="col-12 col-lg-6">
          <Player
            playsInline
            aspectRatio="16:9"
            // startTime={300}
            src="assets/video/video_1.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
          <div className="text-center desc">招商会花絮</div>
        </div>

        <div className="col-12 col-lg-6">
          <Player
            playsInline
            aspectRatio="16:9"
            // startTime={300}
            // poster="assets/image/poster.jpg"
            src="assets/video/video_2.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
          <div className="text-center desc">众人一起见证产品效果</div>
        </div>

        <div className="col-12 col-lg-6">
          <Player
            playsInline
            aspectRatio="16:9"
            // startTime={300}
            src="assets/video/video_3.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
          <div className="text-center desc">视力防控公益活动走进校园</div>
        </div>

        <div className="col-12 col-lg-6">
          <Player
            playsInline
            aspectRatio="16:9"
            // startTime={300}
            src="assets/video/video_4.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
          <div className="text-center desc">视力防控公益活动走进校园</div>
        </div>
      </div>
    </div>

    <div className="container about-us">
      <div className="process">
        <span className="point point_1"></span>
        <span className="point point_2"></span>
        <span className="point point_3"></span>
        <span className="desc desc_1">坐落于杭州</span>
        <span className="desc desc_2">2014年成立</span>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <img className="about-us-img" src="assets/image/about_us@2x.png" alt=""/>
        </div>
        <div className="col-12 col-lg-5 offset-lg-1 about-us-right">
          <div className="about-us-right-box">
            <img src="" alt=""/>
            <div>
              <span>关于我们</span>
              <hr className="hr" />
            </div>
            <p>杭州创胜生物科技有限公司，成立于2014年，总部设在美丽的杭州。雾美优视将改善青少年儿童视力健康为己任，以保护提升青少年视力为爆点，全家人的视力美护为核心。</p>
            <MoreButton href="" />
          </div>
        </div>
      </div>

    </div>
    
  </div>
}

export default Home