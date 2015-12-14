import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {FontA, FontABold} from '../../../constants/fonts';
import Sprites from '../../../constants/sprite';
import Colors from '../../../constants/colors';
import ButtonA from '../../widgets/button/buttonA';
import ButtonB from '../../widgets/button/buttonB';
import CardH from '../../widgets/card/cardH';
import CardI from '../../widgets/card/cardI';


export default class Cover extends Component {

  render(){
    var style = this.getStyle();
    var cards = this.getCards();

    return (
      <div className="container" style={style.wrapper}>
        <div className="row hidden-sm hidden-xs">
          <div className="col-md-6 col-sm-6">
            <div style={style.iconWrapper}>
              <div style={style.arrowBigYellowStyle}></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <CardH data={cards.cardA} sprite={style.segurosCamion}>
              <p style={style.buttonWrapperLeft}>
                <ButtonB />
              </p>
            </CardH>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <CardI data={cards.cardB} sprite={style.seguroCertificado}>
              <div style={style.buttonWrapperRight}>
                <ButtonA text="CERTIFICADO" type='A' />
              </div>
            </CardI>
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
            paddingTop: '30px'
          }
        },
        elements: [{
          type: 'title',
          text: ['Seguros para <br />Vehiculos <br />Comerciales'],
          style: FontABold.getVariation('homeB')
        }, {
          type: 'description',
          text: ['Contamos con seguros para <br />vehículos comerciales con <br />cobertura en México y en <br />Estados Unidos, para que <br />siempre estés protegido.'],
          style: _.merge({}, FontA.getVariation('homeA'), {
            marginTop: '20px'
          })
        }]
      },
      cardB: {
        elements: [{
          type: 'title',
          text: ['Solicita tu <br />certificado de <br />aseguranza'],
          style: _.merge({}, FontABold.getVariation('homeA'), {
            paddingTop: '20px'
          })
        }]
      }
    }
  }

  getStyle() {
    return {
      wrapper: {
        marginTop: '20px'
      },
      buttonWrapperLeft: {
        marginTop: '20px',
        marginBottom: '50px'
      },
      buttonWrapperRight: {
        marginTop: '50px'
      },
      iconWrapper: {
        position: 'absolute',
        right: 0,
        zIndex: 1,
        top: '-13px',
        right: '-13px'
      },
      segurosCamion: Sprites.Home.SegurosCamion,
      arrowBigYellowStyle: Sprites.General.ArrowBigYellow,
      seguroCertificado: Sprites.Home.SeguroCertificado
    }
  }
}
