import React from 'react'
import { Slider } from '../../Components/Slider'
import { BigTitle } from '../../Components/Title';
import './Brand.scss'
function Brand() {
  const sliderImages = [
    {image: 'brand/banner@2x.png', to: '/brand'},
    {image: 'brand/banner@2x.png', to: '/brand'},
    {image: 'brand/banner@2x.png', to: '/brand'}
  ];
  return <div className="brand">
    <Slider sliderImages={sliderImages} />
    <BigTitle className="text-center title" cn="品牌连锁形象店 全国招商" en="Nationwide investment promotion" />
    <div className="content text-center">
      <img src="/assets/image/brand/promotion@2x.png" alt=""/>
      <span className="large-font-size dark-color desc desc_1 text-left">无加盟费，超低风险</span>
      <span className="large-font-size dark-color desc desc_2 text-left">专业培训，可上门指导</span>
      <span className="large-font-size dark-color desc desc_3 text-left">精准引流，创新模式</span>
      <span className="large-font-size dark-color desc desc_4 text-left">无套路，纯技术，帮您赚钱！</span>
    </div>

    <div className="contact d-flex justify-content-center">
      <div className="contact-content text-center light-color">雾美优视愿与您携手引领眼部大健康时代，共创财富！<br/>期待您的加入，咨询电话：13738037181</div>
    </div>
    
  </div>
}

export default Brand