import React, { Component, PropTypes} from 'react';

export default class Powered extends Component {

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            Todos los derechos reservados © InterBrokers
          </div>
          <div className="col-md-3 col-md-offset-6 col-sm-12">
            Un proyecto de: <a>POOL</a>
            Código por: <a>MINT</a>
          </div>
        </div>
      </div>
    );
  }
}
