'use strict';

import React, { Component, PropTypes} from 'react';
import Sprites from '../../sprites/sprite.js';
import _ from 'lodash';

var sectionStyle = {
  backgroundColor: '#f3f3f4',
  height: '70px'
};

var contentStyle = {
  padding: '30px 25px 0px 50px',
  boxSizing: 'border-box'
};

var checkStyle = _.merge(Sprites.General.CheckRed, {
  display: 'inline-block',
  float: 'left',
  marginTop: '20px',
  marginLeft: '25px'
});

var telephoneStyle = {
  fontSize: '16px',
  color: '#383939',
  paddingLeft: '20px',
  marginTop: '8px',
  display: 'inline-block'
};

var facebookStyle = _.merge(Sprites.General.Facebook, {
  display: 'inline-block',
  marginTop: '15px',
  float: 'right'
});

var navbarStyle = {
  background: 'none',
  border: 'none'
};

var menuItemStyle = {
  color: '#4f7584',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '12px',
  fontFamily: 'noto-sans-bold',
  height: '70px',
  padding: '25px 30px 0'
};

var navStyle = {
  paddingLeft: '100px'
};

var midStyle = {
  width: '100px',
  height: '100%',
  display: 'display-bloack',
  float: 'left'
};

export default class Menu extends Component {


  render(){

    return (
      <div style={sectionStyle}>
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-main-menu" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <span style={checkStyle}></span>
              <a className="navbar-brand" href="tel:01.800.788.04.08" style={telephoneStyle}>01.800.788.04.08</a>
            </div>
            <div className="hidden-xs hidden-sm" style={midStyle}>&nbsp;</div>
            <div className="collapse navbar-collapse" id="bs-navbar-main-menu">
              <ul className="nav navbar-nav">
                <li className="active"><a href="" style={menuItemStyle}>inicio</a></li>
                <li><a href="" style={menuItemStyle}>nosotros</a></li>
                <li><a href="" style={menuItemStyle}>servicios</a></li>
                <li><a href="" style={menuItemStyle}>blog</a></li>
                <li><a href="" style={menuItemStyle}>contact</a></li>
              </ul>
              <a style={facebookStyle} className="hidden-xs hidden-sm"></a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
