'use strict';

import React, { Component, PropTypes} from 'react';
import Sprites from '../../constants/sprite';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import _ from 'lodash';
import ButtonD from '../widgets/ButtonD';


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
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
        navbar: _.merge({}, Fonts.typeA, {
          display: 'inline-block',
          paddingTop: '10px'
        }),
        menuItem: _.merge({}, Fonts.typeB, {
          height: '70px',
          padding: '25px 30px 0'
        }),
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
      }
    };
  }

  componentDidMount(){
    if (document.body.clientWidth > 320 && document.body.clientWidth < 1024) {
      var state = this.state;
      state.style.menuItem = _.merge({}, this.state.style.menuItem, {
        padding: '25px 15px 0'
      });
      this.setState(state);
    }
  }

  render(){

    return (
      <div style={this.state.style.section}>
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-main-menu" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div style={this.state.style.brandWrapper}>
                <div style={this.state.style.logoWrapper}>
                  <i style={this.state.style.logo}></i>
                </div>
                <a className="navbar-brand" href="tel:01.800.788.04.08" style={this.state.style.navbar}>01.800.788.04.08</a>
              </div>
            </div>
            <div className="hidden-xs hidden-sm" style={this.state.style.mid}>&nbsp;</div>
            <div className="collapse navbar-collapse" id="bs-navbar-main-menu">
              <ul className="nav navbar-nav">
                <li className="active"><a href="" style={this.state.style.menuItem}>inicio</a></li>
                <li><a href="" style={this.state.style.menuItem}>nosotros</a></li>
                <li><a href="" style={this.state.style.menuItem}>servicios</a></li>
                <li><a href="" style={this.state.style.menuItem}>blog</a></li>
                <li><a href="" style={this.state.style.menuItem}>contact</a></li>
              </ul>
              <div className="hidden-xs">
                <div style={this.state.style.iconsWrapper}>
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
}
