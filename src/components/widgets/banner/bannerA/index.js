import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Sprites from '../../../../constants/sprite';
import Fonts from '../../../../constants/fonts';
import ButtonB from '../../buttonB';
import BigCard from './bigCard';


export default class Banner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        permitsSprite: Sprites.HomeBanner.Permits,
        insuranceSprite: Sprites.HomeBanner.Insurance,
        proceduresSprite: Sprites.HomeBanner.Procedures,
        arrowBigYellow: Sprites.General.ArrowBigYellow,
        zeroPadding: {
          padding: 0,
        },
        zeroMargin: {
          margin: 0
        },
        cardA: {
          backgroundColor: '#f7323f',
          color: 'white',
          height: Sprites.HomeBanner.Permits.height,
          width: Sprites.HomeBanner.Permits.width,
          padding: '18px 40px 0 20px'
        },
        alignTextRight: {
          textAlign: 'right'
        },
        customText: {
          margin: '18px 0 0 0'
        },
        customP: {
          margin: '17px 0 0 0'
        },
        btnWithText: {
          width: '100%',
          textAlign: 'center',
          position: 'absolute',
          top: '37%'
        },
        customB: {
          fontFamily: 'noto-sans-bold',
          fontSize: '25px',
          color: 'white',
          display: 'inline-block '
        },
        moreThanArrowAnchor: {
          paddingLeft: '15px'
        },
        moreThanArrow: {
          color: 'yellow',
          top: '4px',
          fontSize: '25px',
          fontWeight: 'bold'
        }
      }
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
    var cards = {
      bigCard: [{
        type: 'title',
        text: ['Servicio Integral'],
        style: _.merge({}, Fonts.typeC, {
          paddingBottom: '15px'
        })
      }]
    };

    var arrowYellowEl = (<a style={this.state.style.moreThanArrowAnchor}>
      <i className="glyphicon glyphicon-menu-right" style={this.state.style.moreThanArrow}></i>
    </a>);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="row blackgroundBlackHoverOpacity">
              <BigCard data={cards.bigCard} />
            </div>
          </div>
          <div className="col-md-6 col-sm-6" style={this.state.style.zeroPadding}>
            <div className="row" style={this.state.style.zeroMargin}>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={this.state.style.zeroPadding}>
                <div style={this.state.style.cardA}>
                  <div className="pull-right" style={this.state.style.arrowBigYellow}></div>
                  <br className="clear-fix" />
                  <h2 style={this.state.style.customText}>Expertos en el Sector Transportista</h2>
                  <p style={this.state.style.customP}>Más de 15 años de experiencia.</p>
                  <div style={this.state.style.alignTextRight}>
                    <ButtonB />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={this.state.style.zeroPadding}>
                <div style={this.state.style.permitsSprite} className="img-responsive">
                  <div style={this.state.style.btnWithText}>
                    <h2 style={this.state.style.customB}>PERMISOS</h2>
                    {arrowYellowEl}
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={this.state.style.zeroMargin}>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={this.state.style.zeroPadding}>
                <div style={this.state.style.proceduresSprite} className="img-responsive">
                  <div style={this.state.style.btnWithText}>
                    <h2 style={this.state.style.customB}>TRÁMITES</h2>
                    {arrowYellowEl}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={this.state.style.zeroPadding}>
                <div style={this.state.style.insuranceSprite} className="img-responsive">
                  <div style={this.state.style.btnWithText}>
                    <h2 style={this.state.style.customB}>SEGUROS</h2>
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
