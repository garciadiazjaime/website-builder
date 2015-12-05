import React, { Component, PropTypes} from 'react';
import Sprites from '../../../sprites/sprite.js';
import Colors from '../../../constants/colors';
import ButtonA from '../../widgets/buttonA';

var camionServicios = Sprites.Home.CamionServicios;

var containerStyle = {
  backgroundColor: Colors.grayLight,
  marginTop: '50px',
  height: '520px'
};

var titleStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '40px',
  color: Colors.blueDark,
  marginBottom: '50px'
};

var textRed = {
  color: Colors.red
};

var introStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '16px',
  color: Colors.grayDark
};

var descriptionStyle = {
  fontFamily: 'noto-sans-regular',
  fontSize: '16px',
  color: Colors.grayDark,
  paddingBottom: '50px'
};

var leftWrapperStyle = {
  paddingLeft: '50px',
  paddingTop: '130px'
};

export default class Service extends Component {

  constructor(props) {
    super(props);
    this.state = {
      containerStyle: containerStyle,
      leftWrapperStyle: leftWrapperStyle,
      camionServicios: camionServicios
    }
  }

  componentDidMount(){
    if (document.body.clientWidth > 320 && document.body.clientWidth < 769) {
      this.setState({
        leftWrapperStyle: _.merge({}, leftWrapperStyle, {
          paddingLeft: '25px',
          paddingTop: '70px',
        }),
        camionServicios: _.merge({}, camionServicios, {
          width: '100%'
        })
      });
    }
    else if (document.body.clientWidth < 321) {
      this.setState({
        leftWrapperStyle: _.merge({}, leftWrapperStyle, {
          paddingTop: '25px'
        })
      });
    }
  }

  render(){

    return (
      <div className="container" style={this.state.containerStyle}>
        <div className="row">
          <div className="col-md-6 col-sm-5 col-xs-12">
            <div style={this.state.leftWrapperStyle}>
              <h2 style={titleStyle}>
                Servicio <br />Integral <span style={textRed}>360</span>
              </h2>
              <h3 style={introStyle}>Te ayudamos a llegar más lejos.</h3>
              <p style={descriptionStyle}>
                Entendemos tus necesidades, para ofrecerte <br /> una solución integral.
              </p>
              <ButtonA text="NUESTROS SERVICIOS" />
            </div>
          </div>
          <div className="col-md-6 col-sm-7 col-xs-12 hidden-xs">
            <div className="row">
              <div style={this.state.camionServicios}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
