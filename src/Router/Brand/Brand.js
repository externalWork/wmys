import React from 'react'
import { Slider } from '../../Components/Slider'
import { BigTitle } from '../../Components/Title';
import './Brand.scss'
function Brand() {
  const sliderImages = ['brand/banner@2x.png', 'brand/banner@2x.png', 'brand/banner@2x.png'];
  return <div className="brand">
    <Slider sliderImages={sliderImages} />
    <BigTitle className="text-center title" cn="品牌连锁形象店 全国招商" en="Nationwide investment promotion" />
    <div className="content text-center">
      <img src="assets/image/brand/promotion@2x.png" alt=""/>
      <span className="large-font-size dark-color desc desc_1">无加盟费，超低风险</span>
      <span className="large-font-size dark-color desc desc_2">专业培训，可上门指导</span>
      <span className="large-font-size dark-color desc desc_3">精准引流，创新模式</span>
      <span className="large-font-size dark-color desc desc-4">无套路，纯技术，帮您赚钱！</span>
    </div>
    
  </div>
}

export default Brand