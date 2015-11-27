import React, { Component, PropTypes} from 'react';
import Sprites from '../../../sprites/sprite.js';

var integralStyle = Sprites.HomeBanner.IntegralService;
var permitsStyle = Sprites.HomeBanner.Permits;
var insuranceStyle = Sprites.HomeBanner.Insurance;
var proceduresSytle = Sprites.HomeBanner.Procedures;

var btn = {
  backgroundColor: 'yellow'
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

export default class Banner extends Component {

  render(){

    return (
      <div className="container">
        <div className="row" style={zeroMargin}>
          <div className="col-md-6 col-sm-12" style={zeroPadding}>
            <div style={integralStyle} className="img-responsive">
              Servicio Integral <a style={btn}>></a>
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
