import React, { Component, PropTypes} from 'react';
import Sprites from '../../constants/sprite';
import Logo from './logo';


export default class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        section: {
          height: '160px',
          paddingTop: '57px'
        },
        logoWrapper: {
          paddingLeft: '35px'
        },
        title: {
          color: '#4f7584',
          fontSize: '14px',
          display: 'inline-block',
          marginTop: '10px'
        },
        arrow: _.merge({}, Sprites.General.ArrowSmallYellow, {
          display: 'inline-block',
          position: 'relative',
          top: '-8px'
        })
      }
    }
  }

  componentDidMount(){
    if (document.body.clientWidth <= 320) {
      var state = this.state;
      state.style.section = {
        height: '100px',
        margin: '20px 0'
      };
      this.setState(state);
    }
  }

  render(){

    return (
      <div className="container" style={this.state.style.section}>
          <div className="row">
            <div className="col-md-10 col-sm-8 col-xs-12">
              <div style={this.state.style.logoWrapper}>
                <Logo />
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-12">
              <div className="pull-right">
                <span style={this.state.style.title}>Te vemos grande</span>
                <span style={this.state.style.arrow}></span>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
