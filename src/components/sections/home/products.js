import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Sprites from '../../../constants/sprite';
import Colors from '../../../constants/colors';
import ButtonA from '../../widgets/button/buttonA';
import ButtonC from '../../widgets/buttonC';


export default class Products extends Component {

  render(){
    var style = this.getStyle();

    return (
      <div style={style.containerWrapperStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div style={style.leftWrapperStyle}>
                <h2 style={style.titleStyle}>
                  Siente la libertad de <br />
                  Vivir tranquilo.
                </h2>
                <br />
                <p style={style.subtitleStyle}>Seguros</p>
                <div className="row">
                  <div className="col-md-11">
                    <hr style={style.breakStyle} />
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-2 col-sm-4 col-xs-4">
                      <ButtonC text="AUTOS" type="AUTOS" />
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                      <ButtonC text="MOTOS" type="MOTOS" />
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                      <ButtonC text="CASA" type="CASA" />
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                      <ButtonC text="EMPRESAS" type="EMPRESAS" />
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                      <ButtonC text="PERSONAS" type="PERSONAS" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div style={style.rightTopWrapperStyle}>
                <div className="row">
                  <div className="col-md-5 col-sm-5">
                    <div style={style.segurosIBKSpriteStyle}></div>
                    <p style={style.ibkSloganStyle}>agente de seguros</p>
                  </div>
                  <div className="col-md-7 col-sm-5">
                    <div style={style.buttonWrapper}>
                      <ButtonA text="CONÓCENOS" type="B" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div style={style.rightBottomWrapperStyle}>
                    <p style={style.descriptionStyle}>
                      A través de nuestra empresa hermana <b style={style.boldStyle}>IBK <br className="hidden-sm" />
                      Agentes de Seguros</b>, te ofrecemos un amplio <br className="hidden-sm" />
                      portafolio en seguros personales, autos, casa, <br className="hidden-sm" />
                      salud, entre otros. Visita nuestro sitio y conoce <br className="hidden-sm" />
                      como podemos ayudarte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getStyle() {
    return {
      segurosIBKSpriteStyle: Sprites.Home.SegurosIBK,
      containerWrapperStyle: {
        backgroundColor: Colors.purple,
        marginTop: '50px',
        paddingBottom: '70px'
      },
      leftWrapperStyle: {
        margin: '70px 50px'
      },
      rightTopWrapperStyle: {
        margin: '70px 0 0 32px'
      },
      rightBottomWrapperStyle: {
        margin: '30px 0 0 35px'
      },
      titleStyle: {
        fontFamily: 'noto-sans-bold',
        fontSize: '25px',
        color: 'white',
      },
      subtitleStyle: {
        fontFamily: 'noto-sans-bold',
        fontSize: '15px',
        color: 'white'
      },
      descriptionStyle: {
        fontFamily: 'noto-sans-regular',
        fontSize: '16px',
        color: 'white'
      },
      boldStyle: {
        fontFamily: 'noto-sans-bold',
      },
      buttonWrapper: {
        marginTop: '45px'
      },
      breakStyle: {
        margin: '0px 0 30px'
      },
      ibkSloganStyle: {
        color: 'white',
        fontSize: '14px',
        fontWeight: '100',
        marginTop: '15px'
      }
    }
  }
}
