import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';
import Fonts from '../../../constants/fonts';
import Card from '../../widgets/card/simpleCard';
import Carousel from '../../widgets/carousel';

export default class WhyIB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        redBlock: {
          background: Colors.red,
          padding: '50px',
          position: 'relative'
        },
      }
    };
  }


  render(){
    var cards = {
      Why: [{
        type: 'subtitle',
        text: ['¿Por qué InterBrokers?'],
        style:  _.merge({}, Fonts.typeH, {
          marginBottom: '20px'
        })
      },
      {
        type: 'title',
        text: ['Entendemos tus necesidades, para ofrecerte una solución integral.'],
        style: _.merge({}, Fonts.typeJ,{
          marginBottom: '50px'
        })
      },
      {
        type: 'description',
        text: ['Mientras que la mayoría se limita a la correduría de seguros, InterBrokers sobresale por su extensa oferta de productos y servicios. Desde una amplia variedad servicios para la gestión de trámites y permisos, hasta consultoría privada principalmente dirigida al sector transportista con actividad binacional.'],
        style:  _.merge({}, Fonts.typeI, {
        })
      }],
      Mision: [
      {
        type: 'title',
        text: ['ENuestra misión: <br />Ayudarte a crecer. '],
        style: _.merge({}, Fonts.typeJ,{
          marginBottom: '50px'
        })
      },
      {
        type: 'description',
        text: ['En interBrokers creemos en la importancia de la seguridad y tranquilidad de nuestros clientes, es por eso que promovemos una cultura enfocada en la prevención para impulsar su crecimiento, desarrollo y transformación.<br />A través de un servicio cálido, efectivo y personalizado nos ocupamos de entender sus necesidades y ofrecerle una solución integral.<br />Interbrokers ofrece servicios de consultoría, trámites, permisos y seguros, siendo expertos en el sector transportista binacional.'],
        style:  _.merge({}, Fonts.typeI, {
        })
      }]
    };
    return (
      <div className="container">
        <div className="row row-eq-height">
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0" style={this.state.style.redBlock}>
            <Card data={cards.Why} />
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            <Carousel />
          </div>
        </div>
        <div className="row row-eq-height">
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            Something
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0" style={this.state.style.redBlock}>
             <Card data={cards.Mision} />
          </div>
        </div>
      </div>
    );
  }
}

