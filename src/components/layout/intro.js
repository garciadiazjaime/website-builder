import React, { Component, PropTypes} from 'react';
import Sprites from '../../constants/sprite';

import Logo from './logo';

var sectionStyle = {
  height: '160px',
  padding: '57px 25px 57px 50px'
};

var rdSectionStyle = {
  height: '100px',
  margin: '20px 0'
};

var textStyle = {
  color: '#4f7584',
  fontSize: '14px',
  display: 'inline-block',
  marginTop: '20px'
};

var arrowStyle = Sprites.General.ArrowSmallYellow;
arrowStyle.display = "inline-block";

export default class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionStyle: sectionStyle
    }
  }

  componentDidMount(){
    if (document.body.clientWidth <= 320) {
      this.setState({
        sectionStyle: rdSectionStyle
      });
    }
  }

  render(){

    return (
      <div className="container" style={this.state.sectionStyle}>

          <div className="row">
            <div className="col-md-10 col-sm-8 col-xs-12">
              <Logo />
            </div>
            <div className="col-md-2 col-sm-4 col-xs-12">
              <div className="pull-right">
                <span style={textStyle}>Te vemos grande</span>
                <span style={arrowStyle}></span>
              </div>
            </div>
          </div>

      </div>
    );
  }
}
