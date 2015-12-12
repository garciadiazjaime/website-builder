import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {FontA, FontABold} from '../../../constants/fonts';
import ButtonA from '../../widgets/button/buttonA';
import CardF from '../../widgets/card/cardF';
import CardG from '../../widgets/card/cardG';


export default class Entry extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    var style = this.getStyle();
    var cards = this.getCards();

    return (
      <div className="container" style={style.containerStyle}>
        <div className="row">
          <div className="col-md-6 col-sm-4 col-xs-12">

            <div style={style.leftWrapperStyle}>
              <CardF data={cards.cardA}>
                <ButtonA text="CONTÁCTANOS" type="A" />
              </CardF>
            </div>

          </div>
          <div className="col-md-6 col-sm-8 col-xs-12 hidden-xs">

            <div className="row">
              <CardG data={cards.cardB} />
            </div>

          </div>
        </div>
      </div>
    );
  }

  getCards() {
    return {
      cardA: {
        elements: [{
          type: 'title',
          text: ['Impulsemos el<br />crecimiento<br />de tu empresa <br />transportista.']
        }]
      },
      cardB: {
        elements: [{
          type: 'title',
          text: ['Nuevo <br />Entrante'],
          style: FontABold.getVariation('homeB')
        }, {
          type: 'description',
          text: ['Conoce todo lo que necesitas <br />para operar tu compañía <br />transportista en Estados Unidos.'],
          style: FontA.getVariation('homeA')
        }]
      }
    }
  }

  getStyle(type) {
    return {
      containerStyle: {
        marginTop: '50px'
      },
      leftWrapperStyle: {
        paddingLeft: '35px'
      }
    };
  }
}
