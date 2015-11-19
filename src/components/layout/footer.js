import React, { Component, PropTypes} from 'react';

import Logo from './logo';

export default class Footer extends Component {

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="row">
              <Logo />
            </div>
            <div className="row">
              <h3>Contacto</h3>
              <h4>MX</h4>
              <p>
                Blvd. Bellas Artes 285, <br />
                Fracc. Nueva Tijuana Tijuana, <br />
                B.C. 22435 <br />
                <a href="tel:6646233035">664.623.3035</a> <br />
                <a href="tel:018007880408">01.800.788.04.08</a>
              </p>
              <h4>US</h4>
              <p>
                9765 Marconi Dr. <br />
                Suite 200G San Diego, <br />
                Ca. 92154 <br />
                619 713.7211
              </p>
            </div>
            <div className="row">
              <a>f</a>
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            Te vemos grande
          </div>
        </div>
      </div>
    );
  }
}
