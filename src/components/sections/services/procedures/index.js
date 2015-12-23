import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {FontA, FontABold} from '../../../../constants/fonts';
import Sprites from '../../../../constants/sprite';
import BannerC from '../../../widgets/banner/bannerC';
import Intro from './intro';
import ServiceItem from '../item';
import items from '../../../../lib/services/procedures';
import Tmp from '../../aboutus/ourServices';
// todo: change tmp for a real component including btn on left

export default class Procedures extends Component {

  render() {
    var cards = this.getCards();
    var style = this.getStyle();

    return (
      <div>
        <div className="container">

          <BannerC data={cards.banner} sprite={style.banner.sprite} />

          <Intro style={style.intro}/>

          <ServiceItem data={items.elements[0].elements} />

        </div>
        <Tmp />
      </div>
    );
  }

  getCards() {
    return {
      banner: {
        wrapper: {
          style: {
            marginLeft: '35px',
            marginTop: '140px',
            height: '210'
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
          style: _.merge({}, FontA.getVariation('homeA'), {
            marginTop: '30px'
          })
        }]
      }
    }
  }

  getStyle() {
    return {
      banner: {
        sprite: Sprites.Procedures.BannerUsa
      }
    };
  }

}

Procedures.propTypes = {
  data: React.PropTypes.array
};
