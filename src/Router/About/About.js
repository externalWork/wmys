import React from 'react'
import { Slider } from '../../Components/Slider'
import { BigTitle } from '../../Components/Title';
// import {Map} from 'react-bmap'
import {
  Map,
  Base,
  Marker,
  Label
} from 'rc-bmap';

import './About.scss'
const { Point, Size } = Base;
const { Content } = Label;
const { Icon } = Marker;
function About() {
  const sliderImages = [
    {image: 'about/banner@2x.png', to: '/brand'},
    {image: 'about/banner@2x.png', to: '/brand'},
    {image: 'about/banner@2x.png', to: '/brand'}
  ];
  return <div className="about">
    <Slider sliderImages={sliderImages} />
    <div className="container">
      <div className="company">
        <BigTitle className="title text-center" cn="公司介绍" en="Company introduction" />
        <div className="desc medium-font-size">
          <p>杭州创胜生物科技有限公司，成立于2014年，总部设在美丽的杭州。</p>
          <p>雾美优视将改善青少年儿童视力健康为己任，以保护提升青少年视力为爆点，全家人的视力美护为核心，专注于护眼、养眼、亮眼，是您身边的视力养护专家，汇聚青少年视力防控、中年人视力养护与眼部保护，采用中医原理，操作简单，容易复制。</p>
          <p> 随着当今社会工作学习压力的不断增大，孩子使用电子产品的时间不断增加，很多孩子患有近视。上班族也要整天对着电脑，眼睛也受到了严重的损害，眼酸涩、眼疲劳、眼干燥肆意袭来，最后也导致了近视。眼睛是我们人体最脆弱的器官，牙齿是我们人体最坚硬的器官，我们坚持每天刷牙，却常常忽略最受累的眼睛 。</p>
          <p>雾美优视怀着虔诚之心，普及大众要养成护眼的好习惯，预防大于治疗，眼疾病才不会有可乘之机！同时投入大量的资金，着重研发，开发出适合中国人，乃至全世界最安全，有效的护眼精品来。</p>
        </div>
      </div>
      <div className="qualification">
        <BigTitle className="title text-center" cn="证书资质" en="Certificate qualification" />
        <div className="row">
          <div className="col-6">
            <img src="assets/image/about/counterfeit@2x.png" alt=""/>
          </div>
          <div className="col-6">
            <img src="assets/image/about/Insurance@2x.png" alt=""/>
          </div>
        </div>
      </div>
      
    </div>
    <div className="contact">
        <BigTitle className="title text-center" cn="联系我们" en="Contact us" />
        <div className="map" id="map">
          <Map
            ak="zMRCkmDZSZczYgov8O1iqQI2GXhhxbBH"
            // scrollWheelZoom
            zoom={19}
          >
            <Point name="center" lng="120.259204" lat="30.242381" />
            <Marker>
              <Point lng="120.259204" lat="30.242381" />
              {/* <Icon
                imageUrl="/assets/image/about/point@2x.png"
              >
                <Size width="30" height="30" />
              </Icon> */}
            <Label>
              <Size name="offset" width="50" height="-25" />
              <Content>
                <div className="position d-flex align-items-center">
                  <span className="img"></span>
                  <span className="name darker-color">博地中心C座</span>
                </div>
              </Content>
            </Label>
            </Marker>
          </Map>
        </div>
      </div>
    <div className="container contact-card d-flex align-items-center">
      <div className="address-name">
        <span className="name">杭州创胜生物科技有限公司</span>
        <hr className="hr" />
      </div>
      <div className="contact_info medium-font-size light-color">
        <div className="user d-flex align-items-center">
          李胜华
        </div>

        <div className="phone d-flex align-items-center">
          13738037181
        </div>

        <div className="address d-flex align-items-center">
          浙江省杭州市萧山区博地中心C座2304A
        </div>
      </div>
    </div>
  </div>
}

export default About