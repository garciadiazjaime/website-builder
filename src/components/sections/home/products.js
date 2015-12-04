import React, { Component, PropTypes} from 'react';

import Sprites from '../../../sprites/sprite.js';
import Colors from '../../../constants/colors';
import ButtonA from '../../widgets/buttonA';
import ButtonC from '../../widgets/buttonC';

var segurosIBKSpriteStyle = Sprites.Home.SegurosIBK;

var containerWrapperStyle = {
  backgroundColor: Colors.purple,
  marginTop: '50px',
  paddingBottom: '70px'
};

var leftWrapperStyle = {
  margin: '70px 50px'
};

var rightTopWrapperStyle = {
  margin: '70px 0 0 32px'
};

var rightBottomWrapperStyle = {
  margin: '30px 0 0 35px'
};

var titleStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '25px',
  color: 'white',
};

var subtitleStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '15px',
  color: 'white'
};

var descriptionStyle = {
  fontFamily: 'noto-sans-regular',
  fontSize: '16px',
  color: 'white'
};

var boldStyle = {
  fontFamily: 'noto-sans-bold',
};

var buttonWrapper = {
  marginTop: '45px'
};

var breakStyle = {
  margin: '0px 0 30px'
};

var ibkSloganStyle = {
  color: 'white',
  fontSize: '14px',
  fontWeight: '100',
  marginTop: '15px'
};

export default class Products extends Component {

  render(){

    return (
      <div style={containerWrapperStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div style={leftWrapperStyle}>
                <h2 style={titleStyle}>
                  Siente la libertad de <br />
                  Vivir tranquilo.
                </h2>
                <br />
                <p style={subtitleStyle}>Seguros</p>
                <div className="row">
                  <div className="col-md-11">
                    <hr style={breakStyle} />
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
              <div style={rightTopWrapperStyle}>
                <div className="row">
                  <div className="col-md-5 col-sm-5">
                    <div style={segurosIBKSpriteStyle}></div>
                    <p style={ibkSloganStyle}>agente de seguros</p>
                  </div>
                  <div className="col-md-7 col-sm-5">
                    <div style={buttonWrapper}>
                      <ButtonA text="CONÓCENOS" style="B" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div style={rightBottomWrapperStyle}>
                    <p style={descriptionStyle}>
                      A través de nuestra empresa hermana <b style={boldStyle}>IBK <br className="hidden-sm" />
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
}
