import React, { Component, PropTypes} from 'react';
import Sprites from '../../../sprites/sprite.js';


var btn = {
  backgroundColor: 'yellow'
};

var cardA = {
  backgroundColor: '#f7323f',
  color: 'white'
};

var integralStyle = Sprites.HomeBanner.IntegralService;
var permitsStyle = Sprites.HomeBanner.Permits;
var insuranceStyle = Sprites.HomeBanner.Insurance;
var proceduresSytle = Sprites.HomeBanner.Procedures;

export default class Banner extends Component {

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div style={integralStyle} className="img-responsive">
              Servicio Integral <a style={btn}>></a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-md-6" style={cardA}>
                <h2>Expertos en el Sector Transportista</h2>
                <p>Más de 15 años de experiencia.</p>
                <a>link</a>
              </div>
              <div className="col-md-6">
                <div style={permitsStyle} className="img-responsive">
                  <h2>PERMISOS</h2>
                  <a>link</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div style={proceduresSytle} className="img-responsive">
                  <h2>TRÁMITES</h2>
                  <a>link</a>
                </div>
              </div>
              <div className="col-md-6">
                <div style={insuranceStyle} className="img-responsive">
                  <h2>SEGUROS</h2>
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
