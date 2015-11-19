import React, { Component, PropTypes} from 'react';

import Stamp from '../../general/stamp';
import ListA from '../../general/listA';

export default class Cover extends Component {

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h2>Siempre Protegido</h2>
            <p>Contamos con seguros para vehículos comerciales con cobertura en México y en Estados Unidos, para que siempre estés protegido.</p>
          </div>
          <div className="col-md-6 col-sm-12">
            <h2>SEGUROS PARA VEHICULOS COMERCIALES</h2>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <Stamp />
              </div>
              <div className="col-md-8 col-sm-12">
                <ListA />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
