'use strict';

import React, { Component, PropTypes} from 'react';
import Sprites from '../../sprites/sprite.js';
import _ from 'lodash';

var sectionStyle = {
  backgroundColor: '#f3f3f4',
  height: '70px'
};

var containerStyle = {
  width: '1024px'
};

var contentStyle = {
  padding: '30px 25px 0px 50px',
  boxSizing: 'border-box'
};

var checkStyle = _.merge(Sprites.General.CheckRed, {
  display: 'inline-block',
  float: 'left',
  marginTop: '-5px'
});

var telephoneStyle = {
  fontSize: '16px',
  color: '#383939',
  paddingLeft: '20px',
  marginTop: '-2px',
  display: 'inline-block'
};

var facebookStyle = _.merge(Sprites.General.Facebook, {
  display: 'inline-block',
  position: 'absolute',
  top: '-10px'
});

var navbarStyle = {
  background: 'none',
  border: 'none'
};

var menuItemStyle = {
  color: '#4f7584',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  padding: '0 15px',
  fontSize: '12px',
  fontFamily: 'noto-sans-bold'
};

export default class Menu extends Component {


  render(){

    return (
      <div style={sectionStyle}>
        <div className="container" style={containerStyle}>
          <div style={contentStyle}>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <span style={checkStyle}></span>
                <a href="tel:01.800.788.04.08" style={telephoneStyle}>01.800.788.04.08</a>
              </div>
              <div className="col-md-8 col-sm-12">
                <nav className="navbar navbar-default" style={navbarStyle}>
                  <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        <li className=""><a style={menuItemStyle}>inicio</a></li>
                        <li><a style={menuItemStyle}>nosotros</a></li>
                        <li><a style={menuItemStyle}>servicios</a></li>
                        <li><a style={menuItemStyle}>blog</a></li>
                        <li><a style={menuItemStyle}>contacto</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-md-1 col-sm-12">
                <a style={facebookStyle}></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
