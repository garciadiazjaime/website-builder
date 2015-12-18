import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';
import Fonts from '../../../constants/fonts';
import Card from '../../widgets/card/simpleCard';

export default class Abstract extends Component {
  constructor(props) {
    super(props);
  }


  render(){

    var cards = this.getCards();
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-sm-12 col-sm-offset-0">
            <Card data={cards.cardA} />
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            <Card data={cards.cardB} />
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-4">
            <Card data={cards.cardC} />
          </div>
        </div>
      </div>
    );
  }

  getCards() {
    return {
      cardA: {
        wrapper: {
          style: {
            marginLeft: '35px'
          }
        },
        elements: [{
          type: 'title',
          text: ['Nosotros'],
          style: _.merge({}, Fonts.typeE, {
            margin: '100px 0 50px 0'
          })
        }]
      },
      cardB: {
        wrapper: {
          style: {
            marginLeft: '35px'
          }
        },
        elements:[{
          type: 'description',
          text: ['A más de 15 años de su surgimiento, nos consolidamos como una empresa de alcance binacional cuyos servicios hemos extendido hasta incluir la gestión de trámites y consultoría privada, transformando nuestro trabajo en un servicio integral capaz de satisfacer las necesidades de nuestros clientes en su totalidad.'],
          style: _.merge({}, Fonts.typeA, {
            margin: '0 0 170px 0'
          })
        }]
      },
      cardC: {
        wrapper: {
          style: {
            marginLeft: '35px'
          }
        },
        elements:[{
          type: 'title',
          text: ['Nuestra misión:<br />ayudarte a crecer'],
          style: _.merge({}, Fonts.typeF, {
            margin: '0'
          })
        }]
      } 
    };
  }
}
