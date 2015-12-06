import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Sprites from '../../../constants/sprite';

import Colors from '../../../constants/colors';
import ButtonA from '../../widgets/buttonA';
import ButtonB from '../../widgets/buttonB';


var containerStyle = {
  marginTop: '20px'
};

var leftWrapperStyle = {
  backgroundColor: Colors.red,
  borderBottomLeftRadius: '35px'
};

var titleStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '35px',
  color: 'white'
};

var subtitleStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '35px',
  color: Colors.blueDark,
  marginTop: '0'
};

var descriptionStyle = {
  fontFamily: 'noto-sans-regular',
  fontSize: '16px',
  color: 'white',
  marginTop: '20px'
};

var buttonContainer = {
  marginTop: '20px',
  marginBottom: '50px'
}

var arrowBigYellowWrapperStyle = {
  position: 'absolute',
  right: 0,
  zIndex: 1,
  top: '-13px',
  right: '-13px'
};

var rightWrapperStyle = {
  padding: '50px 0 0 60px'
};

var buttonWrapper = {
  marginTop: '50px'
};

var leftImgWrapperStyle = {
  padding: '50px 0 0 50px'
};

var leftTextWrapperStyle = {
  padding: '50px 0 0 40px'
};

var segurosCamion = Sprites.Home.SegurosCamion;
var arrowBigYellowStyle = Sprites.General.ArrowBigYellow;
var seguroCertificado = Sprites.Home.SeguroCertificado;

export default class Cover extends Component {

  render(){

    return (
      <div className="container" style={containerStyle}>
        <div className="row hidden-sm hidden-xs">
          <div className="col-md-6 col-sm-6">
            <div style={arrowBigYellowWrapperStyle}>
              <div style={arrowBigYellowStyle}></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="row" style={leftWrapperStyle}>
                  <div className="col-md-4">
                    <div style={leftImgWrapperStyle}>
                      <div style={segurosCamion}></div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div style={leftTextWrapperStyle}>
                      <h2 style={titleStyle}>
                        Seguros para <br />
                        Vehiculos <br />
                        Comerciales
                      </h2>
                      <p style={descriptionStyle}>
                        Contamos con seguros para <br />
                        vehículos comerciales con <br />
                        cobertura en México y en <br />
                        Estados Unidos, para que <br />
                        siempre estés protegido.
                      </p>
                      <p style={buttonContainer}>
                        <ButtonB />
                      </p>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="row">
              <div style={rightWrapperStyle}>
                <div className="col-md-3 col-sm-12">
                  <div>
                    <div style={seguroCertificado}></div>
                  </div>
                </div>
                <div className="col-md-9 col-sm-12">
                  <h2 style={subtitleStyle}>
                    Solicita tu <br />
                    certificado de <br />
                    aseguranza
                  </h2>
                  <div style={buttonWrapper}>
                    <ButtonA text="CERTIFICADO" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
