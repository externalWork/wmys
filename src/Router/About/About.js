import React from 'react'
import { Slider } from '../../Components/Slider'
import { BigTitle } from '../../Components/Title';
import './About'
function About() {
  const sliderImages = ['about/banner@2x.png', 'about/banner@2x.png', 'about/banner@2x.png'];

  return <div className="about">
    <Slider sliderImages={sliderImages} />
  </div>
}

export default About