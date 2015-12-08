import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';
import Fonts from '../../../constants/fonts';

import YellowFleck from '../../widgets/YellowFleck';

export default class Mission extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        title: _.merge({}, Fonts.typeE,{
          margin: '100px 0 50px 35px',
        }),
        description: _.merge({}, Fonts.typeA, {
          margin: '0 0 170px 35px'
        }),
        highlight: _.merge({}, Fonts.typeF,{
          margin: ' 0'
        }),
      }
    };
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-sm-12 col-sm-offset-0">
            <h2 style={this.state.style.title}>Nosotros</h2>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            <p style={this.state.style.description}>
              A más de 15 años de su surgimiento, nos consolidamos como una empresa de alcance binacional cuyos servicios hemos extendido hasta incluir la gestión de trámites y consultoría privada, transformando nuestro trabajo en un servicio integral capaz de satisfacer las necesidades de nuestros clientes en su totalidad.
            </p>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-4">
            <h3 style={this.state.style.highlight}>Nuestra misión:<br />ayudarte a crecer</h3>
          </div>
        </div>
      </div>
    );
  }
}
