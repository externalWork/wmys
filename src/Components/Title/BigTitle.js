import React from 'react';
import './Title.scss';
function BigTitle(props) {
return <div className={props.className} style={{margin: props.margin}}>
  <div className="bigTitle_cn">{props.cn}</div>
  <div className="bigTitle_en">{props.en}</div>
</div>
}

export default BigTitle;

BigTitle.defaultProps = {
  cn: "大标题",
  en: 'big title',
  className: '',
  margin: ''
}