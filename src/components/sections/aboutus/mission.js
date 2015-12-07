import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';

import YellowFleck from '../../widgets/YellowFleck';

export default class Mission extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        blueH2: {
          color: Colors.blueDark,
          textTransform: 'uppercase',
          fontSize: '25px',
          margin: '100px 0 50px 35px',
          fontFamily: 'noto-sans-bold'
        },
        par: {
          fontFamily: 'noto-sans-regular',
          fontSize: '16px',
          margin: '0 0 170px 35px'
        },
        blueH3: {
          color: Colors.blueDark,
          fontSize: '30px',
          margin: ' 0',
          fontFamily: 'noto-sans-bold'
        },
        blueBG: {
          backgroundColor: Colors.blueDark,
          textAlign: 'center',
          color: '#fff',
          padding: '60px 0 80px',
          fontFamily: 'noto-sans-regular',
          fontSize: '16px',
          position: 'relative'
        },
        yellowH3: {
          color: Colors.yellow,
          textTransform: 'uppercase',
          fontSize: '25px',
          margin: '0 0 30px',
          fontFamily: 'noto-sans-bold',
        },
        bold: {
          fontFamily: 'noto-sans-bold',
        }
      }
    };
  }


  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-sm-12 col-sm-offset-0">
            <h2 style={this.state.style.blueH2}>Nosotros</h2>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            <p style={this.state.style.par}>
              A más de 15 años de su surgimiento, nos consolidamos como una empresa de alcance binacional cuyos servicios hemos extendido hasta incluir la gestión de trámites y consultoría privada, transformando nuestro trabajo en un servicio integral capaz de satisfacer las necesidades de nuestros clientes en su totalidad.
            </p>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-4">
            <h3 style={this.state.style.blueH3}>Nuestra misión:<br />ayudarte a crecer</h3>
          </div>
        </div>
        <div className="row" style={this.state.style.blueBG}>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
            <h3 style={this.state.style.yellowH3}>Nuestra misión</h3>
            <p style={this.state.style.bold}>Ayudarte a crecer</p>
            <p>Ofrecer una amplia gama de productos y servicios de excelencia con coberturas y vigencias adaptables a todos nuestros clientes para así garantizar su total satisfacción e impulsar su crecimiento. En interbrokers te vemos grande.
            </p>
          </div>
          <YellowFleck />
        </div>
      </div>
    );
  }
}
