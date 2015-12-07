import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';


export default class Banner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        banner: {
          backgroundColor: 'black',
          height: '512px',
        },
        bannerContent:{
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
          WebkitTransform: 'translateY(-50%)',
          MsTransform: 'translateY(-50%)',
          color: 'white',
        },
        bannerP:{
          marginLeft: '35px',
          fontFamily: 'noto-sans-regular',
          fontSize: '16px'
        },
        bannerH1: {
          fontFamily: 'noto-sans-bold',
          fontSize: '40px',
          marginLeft: '35px',
          marginBottom: '40px'
        }
      }
    };
  }


  render(){
    return (
      <div>
        <div className="container">
          <div className="row" style={this.state.style.banner}>
            <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-0" style={this.state.style.bannerContent}>
              <h1 style={this.state.style.bannerH1}>
                Expertos en el sector transportista binacional.
              </h1>
              <p style={this.state.style.bannerP}>
                Con más de 15 años de experiencia, somos expertos en el sector transportista binacional.
              </p>
            </div>
          </div>
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
        </div>
      </div>
    );
  }

}
