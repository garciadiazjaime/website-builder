import React, { Component, PropTypes} from 'react';
import Sprites from '../../../constants/sprite';
import _ from 'lodash';
import ButtonB from '../../widgets/buttonB';

var integrationStyle = Sprites.HomeBanner.IntegralService;
var permitsStyle = Sprites.HomeBanner.Permits;
var insuranceStyle = Sprites.HomeBanner.Insurance;
var proceduresSytle = Sprites.HomeBanner.Procedures;
var arrowBigYellowStyle = Sprites.General.ArrowBigYellow;

var btnContainer = {
  width: '100%',
  textAlign: 'center',
  position: 'absolute',
  top: '68%',
};

var zeroPadding = {
  padding: 0,
};

var zeroMargin = {
  margin: 0
}

var cardA = {
  backgroundColor: '#f7323f',
  color: 'white',
  height: permitsStyle.height,
  width: permitsStyle.width,
  padding: '18px 40px 0 20px'
};

var text70 = {
  color: 'white',
  fontSize: '25px',
  fontFamily: 'noto-sans-bold',
  paddingBottom: '15px'
};

var alignTextRight = {
  textAlign: 'right'
};

var customText = {
  margin: '18px 0 0 0'
};

var customP = {
  margin: '17px 0 0 0'
};

var btnWithText = {
  width: '100%',
  textAlign: 'center',
  position: 'absolute',
  top: '37%'
};

var customB = {
  fontFamily: 'noto-sans-bold',
  fontSize: '25px',
  color: 'white',
  display: 'inline-block '
};

var moreThanArrowAnchor = {
  paddingLeft: '15px'
};

var moreThanArrow = {
  color: 'yellow',
  top: '4px',
  fontSize: '25px',
  fontWeight: 'bold'
};

export default class Banner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardA: cardA,
      customText: customText
    }
  }

  componentDidMount(){
    if (document.body.clientWidth > 320 && document.body.clientWidth < 1024) {
      this.setState({
        cardA: _.merge({}, cardA, {
          paddingRight: '90px'
        }),
        customText: _.merge({}, customText, {
          fontSize: '20px'
        })
      });
    }
  }

  render(){

    var arrowYellowEl = (<a style={moreThanArrowAnchor}>
      <i className="glyphicon glyphicon-menu-right" style={moreThanArrow}></i>
    </a>);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={zeroPadding}>
            <div style={integrationStyle} className="img-responsive">
              <div style={btnContainer}>
                <div style={text70}>Servicio Integral</div>
                <ButtonB />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6" style={zeroPadding}>
            <div className="row" style={zeroMargin}>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={zeroPadding}>
                <div style={this.state.cardA}>
                  <div className="pull-right" style={arrowBigYellowStyle}></div>
                  <br className="clear-fix" />
                  <h2 style={this.state.customText}>Expertos en el Sector Transportista</h2>
                  <p style={customP}>Más de 15 años de experiencia.</p>
                  <div style={alignTextRight}>
                    <ButtonB />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={zeroPadding}>
                <div style={permitsStyle} className="img-responsive">
                  <div style={btnWithText}>
                    <h2 style={customB}>PERMISOS</h2>
                    {arrowYellowEl}
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={zeroMargin}>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={zeroPadding}>
                <div style={proceduresSytle} className="img-responsive">
                  <div style={btnWithText}>
                    <h2 style={customB}>TRÁMITES</h2>
                    {arrowYellowEl}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={zeroPadding}>
                <div style={insuranceStyle} className="img-responsive">
                  <div style={btnWithText}>
                    <h2 style={customB}>SEGUROS</h2>
                    {arrowYellowEl}
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
