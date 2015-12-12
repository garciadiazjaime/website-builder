import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Sprites from '../../../constants/sprite';
import Colors from '../../../constants/colors';
import {FontA, FontABold} from '../../../constants/fonts';
import ButtonA from '../../widgets/button/buttonA';
import CardD from '../../widgets/card/cardD';
import CardE from '../../widgets/card/cardE';

export default class Service extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var style = this.getStyle();
    var cards = this.getCards();

    return (
      <div className="container" style={style.wrapper}>
        <div className="row">
          <div className="col-md-6 col-sm-5 col-xs-11">
            <CardD data={cards.cardA}>
              <ButtonA text="NUESTROS SERVICIOS" type='A' />
            </CardD>
          </div>
          <div className="col-md-6 col-sm-7 col-xs-12 hidden-xs">
            <div className="row">
              <CardE sprite={Sprites.Home.CamionServicios} />
            </div>
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
            marginBottom: '50px'
          }
        },
        elements: [{
          type: 'subtitle',
          text: ['Te ayudamos a llegar más lejos.'],
          style: FontABold.getVariation('headerA')
        }, {
          type: 'description',
          text: ['Entendemos tus necesidades, para ofrecerte <br /> una solución integral.'],
          style: FontA.getVariation('headerA')
        }]
      }
    };
  }

  getStyle(type) {
    return {
      wrapper: {
        backgroundColor: Colors.grayLight,
        marginTop: '50px',
        height: '520px'
      }
    };
  }
}
