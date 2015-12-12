'use strict';

import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import UtilRD from '../../utils/rd';
import Sprites from '../../constants/sprite';
import Colors from '../../constants/colors';
import {FontABold} from '../../constants/fonts';
import ButtonD from '../widgets/button/ButtonD';


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: this.getStyle('INIT')
    };
  }

  componentDidMount(){
    const utilRD = new UtilRD();

    if (utilRD.isTablet(document.body.clientWidth)) {
      this.setState({
        style: this.getStyle('TABLET')
      });
    }
  }

  render(){
    var style = this.getStyle();

    return (
      <div style={style.section}>
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="navbar-header">

              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-main-menu" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div style={style.brandWrapper}>
                <div style={style.logoWrapper}>
                  <i style={style.logo}></i>
                </div>
                <a className="navbar-brand" href="tel:01.800.788.04.08" style={style.navbar}>01.800.788.04.08</a>
              </div>

            </div>

            <div className="hidden-xs hidden-sm" style={style.mid}>&nbsp;</div>

            <div className="collapse navbar-collapse" id="bs-navbar-main-menu">
              <ul className="nav navbar-nav">
                <li className="active"><a href="" style={style.menuItem}>inicio</a></li>
                <li><a href="" style={style.menuItem}>nosotros</a></li>
                <li><a href="" style={style.menuItem}>servicios</a></li>
                <li><a href="" style={style.menuItem}>blog</a></li>
                <li><a href="" style={style.menuItem}>contact</a></li>
              </ul>

              <div className="hidden-xs">
                <div style={style.iconsWrapper}>

                  <div className="row">
                    <div className="col-md-offset-2 col-md-4 col-sm-offset-2 col-sm-4">
                      <ButtonD sprite="FACEBOOK" />
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <ButtonD sprite="OFFICE" />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </nav>
        </div>
      </div>
    );
  }

  getStyle(type) {
    switch (type) {
      case 'INIT':
        return {
          menuItem: _.merge({}, FontABold.getVariation('menuA'), {
            height: '70px',
            padding: '25px 30px 0'
          })
        };
      case 'TABLET':
        return {
          menuItem: _.merge({}, this.state.style.menuItem, {
            padding: '25px 15px 0'
          })
        };
      default:
        return {
          section: {
            backgroundColor: Colors.grayLight,
            height: '70px'
          },
          brandWrapper: {
            paddingTop: '13px'
          },
          logoWrapper: {
            position: 'relative',
            top: '10px',
            float: 'left'
          },
          logo: _.merge(Sprites.General.Agent, {
            display: 'inline-block'
          }),
          navbar: _.merge({}, FontABold.getVariation('headerA'), {
            display: 'inline-block',
            paddingTop: '10px'
          }),
          menuItem: this.state.style.menuItem,
          iconsWrapper: {
            marginTop: '15px',
            float: 'right'
          },
          mid: {
            width: '100px',
            height: '100%',
            display: 'display-bloack',
            float: 'left'
          }
        };
    }
  }
}
