import React, { Component, PropTypes} from 'react';
import Sprites from '../../../sprites/sprite.js';

var integrationStyle = Sprites.HomeBanner.IntegralService;
var permitsStyle = Sprites.HomeBanner.Permits;
var insuranceStyle = Sprites.HomeBanner.Insurance;
var proceduresSytle = Sprites.HomeBanner.Procedures;

var btnYellow = {
  backgroundColor: 'yellow',
  width: '50px',
  height: '30px',
  display: 'inline-block',
  borderRadius: '20px'
};

var btnContainer = {
  width: '100%',
  textAlign: 'center',
  position: 'absolute',
  top: '68%',
};

var zeroPadding = {
  padding: 0,
};

var zeroMargin = {
  margin: 0
}

var cardA = {
  backgroundColor: '#f7323f',
  color: 'white',
  height: permitsStyle.height,
  width: permitsStyle.width
};

var text70 = {
  color: 'white',
  fontSize: '25px',
  fontFamily: 'noto-sans-bold',
  paddingBottom: '15px'
};

var moreThan = {
  top: '8px',
  fontSize: '15px',
  fontWeight: 'bold'
};

export default class Banner extends Component {

  render(){

    return (
      <div className="container">
        <div className="row" style={zeroMargin}>
          <div className="col-md-6 col-sm-12" style={zeroPadding}>
            <div style={integrationStyle} className="img-responsive">
              <div style={btnContainer}>
                <div style={text70}>Servicio Integral</div>
                <a style={btnYellow}>
                  <i className="glyphicon glyphicon-menu-right" style={moreThan}></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12" style={zeroPadding}>
            <div className="row" style={zeroMargin}>
              <div className="col-md-6" style={zeroPadding}>
                <div style={cardA}>
                  <h2 style={zeroMargin}>Expertos en el Sector Transportista</h2>
                  <p>Más de 15 años de experiencia.</p>
                  <a>link</a>
                </div>
              </div>
              <div className="col-md-6" style={zeroPadding}>
                <div style={permitsStyle} className="img-responsive">
                  <h2 style={zeroMargin}>PERMISOS</h2>
                  <a>link</a>
                </div>
              </div>
            </div>
            <div className="row" style={zeroMargin}>
              <div className="col-md-6" style={zeroPadding}>
                <div style={proceduresSytle} className="img-responsive">
                  <h2 style={zeroMargin}>TRÁMITES</h2>
                  <a>link</a>
                </div>
              </div>
              <div className="col-md-6" style={zeroPadding}>
                <div style={insuranceStyle} className="img-responsive">
                  <h2 style={zeroMargin}>SEGUROS</h2>
                  <a>link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
