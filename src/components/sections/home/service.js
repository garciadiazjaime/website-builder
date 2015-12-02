import React, { Component, PropTypes} from 'react';
import Sprites from '../../../sprites/sprite.js';
import Colors from '../../../constants/colors';
import ButtonA from '../../widgets/buttonA';

var camionServicios = Sprites.Home.CamionServicios;

var containerStyle = {
  backgroundColor: Colors.grayLight,
  marginTop: '50px',
  paddingLeft: '50px',
  paddingRight: '50px',
  height: '520px'
};

var titleStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '40px',
  color: Colors.blueDark,
  marginTop: '130px',
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

export default class Service extends Component {

  render(){

    return (
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className="col-md-6 col-sm-5 col-xs-12">
            <h2 style={titleStyle}>
              Servicio <br />Integral <span style={textRed}>360</span>
            </h2>
            <h3 style={introStyle}>Te ayudamos a llegar más lejos.</h3>
            <p style={descriptionStyle}>
              Entendemos tus necesidades, para ofrecerte <br /> una solución integral.
            </p>
            <ButtonA title="NUESTROS SERVICIOS" />
          </div>
          <div className="col-md-6 col-sm-7 col-xs-12 hidden-xs">
            <div style={camionServicios}></div>
          </div>
        </div>
      </div>
    );
  }
}
