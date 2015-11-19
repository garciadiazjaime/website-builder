import React, { Component, PropTypes} from 'react';

export default class Entry extends Component {

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h2>Impulsemos el crecimiento de tu empresa transportista.</h2>
            <a>CONTÁCTANOS</a>
          </div>
          <div className="col-md-6 col-sm-12">
            [img]
            <h2>Nuevo Entrante</h2>
            <p>Conoce todo lo que necesitas para operar tu compañía transportista en Estados Unidos.</p>
            <a>link</a>
          </div>
        </div>
      </div>
    );
  }
}
