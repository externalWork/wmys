import React, { useState, useEffect } from 'react'
import { Slider } from '../../Components/Slider'
import { BigTitle } from '../../Components/Title';
import { useParams } from "react-router-dom";

import './Product.scss'

function Product(props) {
  const [ checkedIndex, setCheckedIndex] = useState(0)
  const sliderImages = [
    {image: 'product/banner@2x.png', to: '/brand'},
    {image: 'product/banner@2x.png', to: '/brand'},
    {image: 'product/banner@2x.png', to: '/brand'}
  ];
  let { name = '0' } = useParams();
  useEffect(() => {
    const tabIndex = ['0', '1']
    const index = Number(tabIndex.includes(name) ? name: '0');
    setCheckedIndex(index)
  }, [name]);

  function tabContent() {
    return checkedIndex ?
      <div className="tab-content">
        <div className="technology">
          <BigTitle className="text-center mb-80" cn="养眼护眼黑科技" en="Black Technology" />
          <div className="content row">
            <div className="col-12 col-md-6">
            < img src="/assets/image/product/technology_img@2x.png" alt=""/>
            </div>
            <div className="col-12 col-md-6 text-md-left text-center">
              <div className="technology_desc">
                <div className="larger-font-size darker-color title">为护眼而生</div>
                <p className="body-font-size light-color">护眼也需要像刷牙一样天天坚持，<br/>眼睛累了，请用雾美优视！</p>
              </div>
            </div>
          </div>
        </div>
        <div className="principl">
          <BigTitle className="text-center mb-80" cn="养眼护眼三部曲" en="Eye nourishing Trilogy" />
          <div className="row">
            <div className="col-4">
              <div className="large-font-size font-bold darker-color mb-10">01</div>
              <div className="small-font-size dark-color mb-40">一通</div>
              <div className="min-font-size light-color text-justify">打通堵塞的眼脉，快速溶解眼部沉淀的毒素与垃圾。</div>
            </div>
            <div className="col-4">
              <div className="large-font-size font-bold darker-color mb-10">02</div>
              <div className="small-font-size dark-color mb-40">二养</div>
              <div className="min-font-size light-color text-justify">冷热传递，渗透至眼周，促进眼部微循环。</div>
            </div>
            <div className="col-4">
              <div className="large-font-size font-bold darker-color mb-10">03</div>
              <div className="small-font-size dark-color mb-40">三激活</div>
              <div className="min-font-size light-color text-justify">恢复眼部滋润，加速细胞分裂，提高视神经活力。</div>
            </div>
          </div>
        </div>
      </div>
       :
      <div className="tab-content">
        <div className="future">
          <BigTitle className="text-center mb-80" cn="别让近视挡住孩子的未来" en="Building a child's future" />
          <div className="d-flex justify-content-between">
            <div className="imgae-box">
              <img className="mb-26" src="/assets/image/product/future_1@2x.png" alt=""/>
              <img src="/assets/image/product/future_4@2x.png" alt=""/>
            </div>
            <div className="imgae-box">
              <img className="mb-26" src="/assets/image/product/future_2@2x.png" alt=""/>
              <img src="/assets/image/product/future_5@2x.png" alt=""/>
            </div>
            <div className="imgae-box">
              <img className="mb-26" src="/assets/image/product/future_3@2x.png" alt=""/>
              <img src="/assets/image/product/future_6@2x.png" alt=""/>
            </div>
            <div className="imgae-box">
              <img src="/assets/image/product/future_7@2x.png" alt=""/>
            </div>
          </div>
        </div>
        <div className="principl">
          <BigTitle className="text-center mb-80" cn="产品原理" en="Product principl" />
          <div className="row">
            <div className="col-4">
              <div className="large-font-size font-bold darker-color mb-10">01</div>
              <div className="small-font-size dark-color mb-40">点穴拨筋</div>
              <div className="min-font-size light-color text-justify">对眼部十一个穴位点穴拨筋，刮痧，缓解视疲劳，放松睫状肌。</div>
            </div>
            <div className="col-4">
              <div className="large-font-size font-bold darker-color mb-10">02</div>
              <div className="small-font-size dark-color mb-40">天然植物无添加</div>
              <div className="min-font-size light-color text-justify">通过天然植物提取的无添加、零刺激、安全可达口服级别的纳米化小分子，直达筋膜层，修复受损视神经细胞，清除自由基，补充细胞营养</div>
            </div>
            <div className="col-4">
              <div className="large-font-size font-bold darker-color mb-10">03</div>
              <div className="small-font-size dark-color mb-40">重塑眼睛自我调节</div>
              <div className="min-font-size light-color text-justify">结合砭石疗法，打通经络，增加气血，输送营养，重塑眼睛的自我调节功能。</div>
            </div>
          </div>
        </div>

        <div className="formulation">
          <BigTitle className="text-center mb-80" cn="产品配方" en="Product formulation" />
          <div className="row">
            <div className="col-6">
              <div className="formulation_item">
                <img className="formulation_img" src="/assets/image/product/formulation_3@2x.png" alt=""/>
                <div className="small-font-size light-color formulation_desc d-flex align-items-center text-justify"><span>北美金缕梅提取物：促进淋巴血液循环，镇静，安抚，调节皮脂分泌。</span></div>
              </div>
            </div>
            <div className="col-6">
              <div className="formulation_item">
                <img className="formulation_img" src="/assets/image/product/formulation_4@2x.png" alt=""/>
                <div className="small-font-size light-color formulation_desc d-flex align-items-center text-justify"><span>黄瓜提取物：促进新陈代谢，抗氧化，舒缓眼部肌肉，缓解视疲劳。</span></div>
              </div>
            </div>
            <div className="col-6">
              <div className="formulation_item">
                <img className="formulation_img" src="/assets/image/product/formulation_1@2x.png" alt=""/>
                <div className="small-font-size light-color formulation_desc d-flex align-items-center text-justify"><span>水解小麦蛋白：保湿，抗氧化，柔软细化皮肤，打通细胞间的通道。</span></div>
              </div>
            </div>
            <div className="col-6">
              <div className="formulation_item">
                <img className="formulation_img" src="/assets/image/product/formulation_2@2x.png" alt=""/>
                <div className="small-font-size light-color formulation_desc d-flex align-items-center text-justify"><span>矢车菊提取物：明目，滋润皮肤。</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
  }
  return <div className="product">
    <Slider sliderImages={sliderImages} />
    <div className="container">
      <div className="tabs row text-center larger-font-size">
        <div className={checkedIndex === 0 ? 'col-6 tab active' : 'col-6 tab'} onClick={() => setCheckedIndex(0)}>眼部滋养能量套</div>
        <div className={checkedIndex === 1 ? 'col-6 tab active' : 'col-6 tab'} onClick={() => setCheckedIndex(1)}>植萃眼部养护组合</div>
      </div>
      {
        tabContent()
      }
    </div>
    {
      checkedIndex === 1 && <div className="groups">
        <BigTitle className="text-center mb-80" cn="五大适用人群" en="Five applicable groups" />
        <div className="content d-flex align-items-center justify-content-between">
          <img className="groups_left" src="/assets/image/product/product@2x.png" alt=""/>
          <img className="groups_middle" src="/assets/image/product/rectangle@2x.png" alt=""/>
          <div className="groups_right">
            <div className="large-font-size darker-color mb-30">白领族</div>
            <div className="body-font-size light-color mb-60">眼干、眼涩、眼疲劳。</div>
            <div className="large-font-size darker-color mb-30">学生族</div>
            <div className="body-font-size light-color mb-60">用眼过度引起的眼部疲劳。</div>
            <div className="large-font-size darker-color mb-30">眼镜族</div>
            <div className="body-font-size light-color mb-60">异物感、干涩。</div>
            <div className="large-font-size darker-color mb-30">中老年人</div>
            <div className="body-font-size light-color mb-60">迎风流泪。</div>
            <div className="large-font-size darker-color mb-30">手机族</div>
            <div className="body-font-size light-color padding-10">长时间看屏幕导致的眼镜不适。</div>
          </div>
          <img className="tree" src="/assets/image/product/tree@2x.png" alt=""/>
        </div>
      </div>
    }
  </div>
}

export default Product