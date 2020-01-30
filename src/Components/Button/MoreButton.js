import React from 'react';
import './MoreButton.scss';

function MoreButton(props) {
  return <a className="more-button" href={props.href}>
    了解更多 →
  </a>
}

export default MoreButton;

MoreButton.defaultProps = {
  href: ''
}