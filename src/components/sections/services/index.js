import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {FontA, FontABold} from '../../../constants/fonts';
import Colors from '../../../constants/colors';

import ServiceCover from './serviceCover/';
import ServiceDetail from './serviceDetail/';


export default class Services extends Component {

  render(){
    var cards = this.getCards();

    return (
      <div className="container">
        <BannerB data={cards.cardA} />
        <ServiceCover data={this.props.data} />
        <ServiceDetail data={this.props.data} />
      </div>
    );
  }

  getCards() {
    return {
      cardA: {
        wrapper: {
          style: {
            backgroundColor: Colors.red,
            paddingLeft: '50px',
            minHeight: '400px'
          }
        },
        elements: [{
          type: 'title',
          text: ['SERVICIOS'],
          style: _.merge({}, FontABold.getVariation('homeC'), {
            paddingTop: '45px',
            marginTop: '0'
          })
        }, {
          type: 'subtitle',
          text: ['Servicios integrales a <br /> ambos lados de la frontera.'],
          style: _.merge({}, FontABold.getVariation('servicesD'), {
            paddingTop: '20px'
          })
        }, {
          type: 'description',
          text: ['Todo lo que neceitas para operar tu emprsa transportista en <br />Estados Unidos y México.'],
          style: _.merge({}, FontA.getVariation('homeA'), {
            paddingTop: '30px'
          })
        }]
      }
    }
  }
}

Services.propTypes = {
  data: React.PropTypes.array.isRequired
};
