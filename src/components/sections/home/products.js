import React, { Component, PropTypes} from 'react';

import Stamp from '../../general/stamp';

export default class Products extends Component {

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h2>Siente la libertad de Vivir tranquilo.</h2>
            <Stamp />
            <Stamp />
            <Stamp />
            <Stamp />
            <Stamp />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              A través de nuestra empresa hermana <b>IBK Agentes de Seguros</b>,
              te ofrecemos un amplio portafolio en seguros personales, autos,
              casa, salud, entre otros. <br />
              Visita nuestro sitio y conoce como podemos ayudarte.
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                [img]
              </div>
              <div className="col-md-8 col-sm-12">
                <a>CONÓCENOS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
