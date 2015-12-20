import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {FontA, FontABold} from '../../../../constants/fonts';
import Sprites from '../../../../constants/sprite';
// import Colors from '../../../constants/colors';
//
// import ServiceCover from './serviceCover/';
// import ServiceDetail from './serviceDetail/';

import BannerC from '../../../widgets/banner/bannerC';


export default class Procedures extends Component {

  render() {
    var cards = this.getCards();
    var style = this.getStyle();

    return (
      <div className="container">

        <BannerC data={cards.cardA} sprite={style.sprite} />

      </div>
    );
  }

  getCards() {
    return {
      cardA: {
        wrapper: {
          style: {
            marginLeft: '50px',
            marginTop: '140px'
          }
        },
        elements: [{
          type: 'title',
          text: ['Evita largas filas, te <br />ayudamos a gestionar <br />todos tus trámites.'],
          style: _.merge({}, FontABold.getVariation('servicesD'), {
          })
        },
        {
          type: 'description',
          text: ['Con más de 15 años de experiencia, somos <br />expertos en el sector transportista binacional.'],
          style: _.merge({}, FontA.getVariation('procedureA'), {
            marginTop: '30px'
          })
        }]
      }
    }
  }

  getStyle() {
    return {
      sprite: Sprites.Procedures.BannerUsa
    };
  }

}

Procedures.propTypes = {
  data: React.PropTypes.array
};
