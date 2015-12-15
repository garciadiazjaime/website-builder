import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import {FontA, FontABold} from '../../../constants/fonts';
import Sprites from '../../../constants/sprite';
import Colors from '../../../constants/colors';
import ButtonA from '../../widgets/button/buttonA';
import ButtonC from '../../widgets/button/buttonC';
import CardJ from '../../widgets/card/cardJ';
import CardK from '../../widgets/card/cardK';


export default class Products extends Component {

  render(){
    var style = this.getStyle();
    var cards = this.getCards();

    return (
      <div style={style.containerWrapperStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <CardJ data={cards.cardA}>
                <div className="col-md-2 col-sm-4 col-xs-4">
                  <ButtonC text="AUTOS" sprite={style.segurosCarros} />
                </div>
                <div className="col-md-2 col-sm-4 col-xs-4">
                  <ButtonC text="MOTOS" sprite={style.segurosMotos} />
                </div>
                <div className="col-md-2 col-sm-4 col-xs-4">
                  <ButtonC text="CASA" sprite={style.segurosCasas} />
                </div>
                <div className="col-md-2 col-sm-4 col-xs-4">
                  <ButtonC text="EMPRESAS" sprite={style.segurosEmpresas} />
                </div>
                <div className="col-md-2 col-sm-4 col-xs-4">
                  <ButtonC text="PERSONAS" sprite={style.segurosPersonas} />
                </div>
              </CardJ>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <CardK data={cards.cardB}
                sprite={style.segurosIBKSpriteStyle}
                slogan="agente de seguros">
                <ButtonA text="CONÓCENOS" type="B" />
              </CardK>
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
          text: ['Siente la libertad de <br />Vivir tranquilo.'],
          style: FontABold.getVariation('homeC'),
        }, {
          type: 'description',
          text: ['Seguros'],
          style: _.merge({}, FontABold.getVariation('homeD'), {
            paddingTop: '20px'
          })
        }]
      },
      cardB: {
        wrapper: {
          style: {
            marginTop: '30px'
          }
        },
        elements: [{
          type: 'description',
          text: ['A través de nuestra empresa hermana <b>IBK <br class="hidden-sm" />Agentes de Seguros</b>, te ofrecemos un amplio <br class="hidden-sm" />portafolio en seguros personales, autos, casa, <br class="hidden-sm" />salud, entre otros. Visita nuestro sitio y conoce <br class="hidden-sm" />como podemos ayudarte.'],
          style: FontA.getVariation('homeA')
        }]
      }
    }
  }

  getStyle() {
    return {
      segurosIBKSpriteStyle: Sprites.Home.SegurosIBK,
      segurosCarros: Sprites.Seguros.SegurosCarros,
      segurosMotos: Sprites.Seguros.SegurosMotos,
      segurosCasas: Sprites.Seguros.SegurosCasas,
      segurosEmpresas: Sprites.Seguros.SegurosEmpresas,
      segurosPersonas: Sprites.Seguros.SegurosPersonas,
      containerWrapperStyle: {
        backgroundColor: Colors.purple,
        marginTop: '50px',
        paddingBottom: '70px'
      }
    }
  }
}
