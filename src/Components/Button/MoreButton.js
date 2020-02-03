import React from 'react';
import { Link } from "react-router-dom"
import './MoreButton.scss';

function MoreButton(props) {
  return <Link className="more-button" to={props.to}>
    了解更多 →
  </Link>
}

export default MoreButton;

MoreButton.defaultProps = {
  to: ''
}