import React from 'react'
import { Slider } from '../../Components/Slider'
import { BigTitle } from '../../Components/Title';
import './Welfare.scss'

function Welfare() {
  const sliderImages = ['welfare/banner@2x.png', 'welfare/banner@2x.png', 'welfare/banner@2x.png'];

  
  return <div className="welfare">
    <Slider sliderImages={sliderImages} />
    <div className="container">
      <BigTitle className="text-center title" cn="公益之星" en="Star of public welfare" />
      <p className="content medium-font-size">雾美优视关爱儿童视力健康，致力于给孩子一个明亮的未来。</p>
      <p className="content medium-font-size">一直以来，坚持不懈将视力防控养护爱心公益活动走进校园。开展视力养护公益讲座，向同学们普及科学用眼知识，增强爱护眼睛的意识，了解预防近视的方法及措施。开展视力健康筛查，学生人手一张测验单，记录检测状况。</p>
      <p className="content medium-font-size">真正达到让每一名学生都了解自己视力情况，从而更好地保护自己的视力。</p>
    </div>
   
  </div>
}

export default Welfare