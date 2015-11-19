import React, { Component, PropTypes} from 'react';

export default class Banner extends Component {

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            Servicio Integral <a>link</a>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-md-6">
                [img 1,1]
                <h2>Expertos en el Sector Transportista</h2>
                <p>Más de 15 años de experiencia.</p>
                <a>link</a>
              </div>
              <div className="col-md-6">
                [img 1,2]
                <h2>PERMISOS</h2>
                <a>link</a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                [img 2,1]
                <h2>TRÁMITES</h2>
                <a>link</a>
              </div>
              <div className="col-md-6">
                [img 2,2]
                <h2>SEGUROS</h2>
                <a>link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
