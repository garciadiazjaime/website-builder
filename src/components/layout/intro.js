import React, { Component, PropTypes} from 'react';
import Sprites from '../../sprites/sprite.js';

import Logo from './logo';

var containerStyle = {
  width: '1024px'
}

var style = {
  height: '160px',
  padding: '57px 25px 57px 50px',
  width: '1024px'
};

var textStyle = {
  color: '#4f7584',
  fontSize: '14px'
};

var arrowStyle = Sprites.General.ArrowSmallYellow;
arrowStyle.display = "inline-block";

export default class Intro extends Component {

  render(){

    return (
      <div className="container" style={containerStyle}>
        <div style={style}>
          <div className="row">
            <div className="col-md-10 col-sm-6">
              <Logo />
            </div>
            <div className="col-md-2 col-sm-6">
              <span style={textStyle}>Te vemos grande</span>
              <span style={arrowStyle}></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
