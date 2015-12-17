import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import CardL from '../../widgets/card/cardL';
import CardM from '../../widgets/card/cardM';
import CardN from '../../widgets/card/cardN';

import BannerB from '../../widgets/banner/bannerB';


// import Logo from '../logo';
import {FontA, FontABold} from '../../../constants/fonts';
import Colors from '../../../constants/colors';
import Sprites from '../../../constants/sprite';
import ButtonD from '../../widgets/button/ButtonD';

// import Location from './location';
// import CallUs from './callUs';

// var containerStyle = {
//   backgroundColor: Colors.grayDark,
//   paddingTop: '50px',
//   paddingBottom: '60px',
//   color: 'white'
// };
//
// var titleStyle = {
//   fontFamily: 'noto-sans-bold',
//   fontSize: '16px',
//   borderBottom: '1px solid ' + Colors.grayMedium,
//   paddingBottom: '8px',
//   maxWidth: '80%',
// };
//
// var descriptionStyle = {
//   fontFamily: 'noto-sans-regular',
//   fontSize: '12px',
//   color: Colors.grayMedium
// };
//
// var itemStyle = {
//   fontFamily: 'noto-sans-bold',
//   fontSize: '14px',
//   color: Colors.grayMedium,
//   display: 'inline-block',
//   paddingTop: '15px'
// };


export default class Services extends Component {


  render(){

    // var serviciosEL = this.getServiciosItems();
    var servicesEl = this.renderServices(this.props.data);
    var cards = this.getCards();

    return (
      <div className="container">

        <BannerB data={cards.cardA} />

        {servicesEl}

      </div>
    );
  }

  renderServices(data) {
    var response = null;
    if (_.isArray(data) && data.length) {
      return data.map((service, index) => {

        var arealEl = service.elements.map((area, indexArea) => {

          var itemEl = area.elements.map((item, indexItem) => {
            return (<CardN title={item.title} key={indexItem} sprite={Sprites.Services.Bullet} />)
          });

          return (<div className="row" key={indexArea} style={area.wrapper.style.main}>
            <div className="col-md-6">
              <CardM title={area.title} subtitle={area.subtitle} sprite={area.sprite} />
            </div>
            <div className="col-md-6" style={area.wrapper.style.right}>
              {itemEl}
            </div>
          </div>);
        });

        return (<div key={index}>
            <div className="row">
              <CardL title={service.title} type={service.type} sprite={service.sprite} />
            </div>
            {arealEl}
          </div>
        );
      }, this);
    }
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
