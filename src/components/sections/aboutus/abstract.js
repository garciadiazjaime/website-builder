import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';
import Fonts from '../../../constants/fonts';
import Card from '../../widgets/card/simpleCard';
import YellowFleck from '../../widgets/YellowFleck';

export default class Mission extends Component {

  render(){
    var cards = {
      NosotrosT: [{
        type: 'title',
        text: ['Nosotros'],
        style: _.merge({}, Fonts.typeE,{
          margin: '100px 0 50px 35px',
        })
      }],
      NosotrosP: [{
        type: 'description',
        text: ['A más de 15 años de su surgimiento, nos consolidamos como una empresa de alcance binacional cuyos servicios hemos extendido hasta incluir la gestión de trámites y consultoría privada, transformando nuestro trabajo en un servicio integral capaz de satisfacer las necesidades de nuestros clientes en su totalidad.'],
        style: _.merge({}, Fonts.typeA, {
          margin: '0 0 170px 35px'
        })
      }],
      Highlight: [{
        type: 'title',
        text: ['Nuestra misión:<br />ayudarte a crecer'],
        style: _.merge({}, Fonts.typeF,{
          margin: '0'
        })
      }]
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-sm-12 col-sm-offset-0">
            <Card data={cards.NosotrosT} />
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            <Card data={cards.NosotrosP} />
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-4">
            <Card data={cards.Highlight} />
          </div>
        </div>
      </div>
    );
  }
}
