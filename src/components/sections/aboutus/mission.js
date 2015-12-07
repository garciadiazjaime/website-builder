import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';


export default class Mission extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        blueBG: {
          backgroundColor: Colors.blueDark,
        }
      }
    };
  }


  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            <h2>Nosotros</h2>
            <p>
              A más de 15 años de su surgimiento, nos consolidamos como una empresa de alcance binacional cuyos servicios hemos extendido hasta incluir la gestión de trámites y consultoría privada, transformando nuestro trabajo en un servicio integral capaz de satisfacer las necesidades de nuestros clientes en su totalidad.
            </p>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-4">
            <h3>Nuestra misión es ayudarte a crecer</h3>
          </div>
        </div>
        <div className="row" style={this.state.style.blueBG}>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
            <h3>Nuestra misión</h3>
            <p>Ayudarte a crecer</p>
            <p>Ofrecer una amplia gama de productos y servicios de excelencia con coberturas y vigencias adaptables a todos nuestros clientes para así garantizar su total satisfacción e impulsar su crecimiento. En interbrokers te vemos grande.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
