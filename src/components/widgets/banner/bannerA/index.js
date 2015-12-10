import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Sprites from '../../../../constants/sprite';
import Fonts from '../../../../constants/fonts';
import CardA from '../../card/cardA';
import CardB from '../../card/cardB';
import CardC from '../../card/cardC';


export default class Banner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        zeroPadding: {
          padding: 0,
        },
        zeroMargin: {
          margin: 0
        },
        cardA: _.merge({}, Fonts.typeD, {
          margin: '18px 0 0 0'
        }),
        customP: {
          margin: '17px 0 0 0'
        },
        btnWithText: {
          width: '100%',
          textAlign: 'center',
          position: 'absolute',
          top: '37%'
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
      // this.setState({
      //   cardA: _.merge({}, cardA, {
      //     paddingRight: '90px'
      //   }),
      //   customText: _.merge({}, customText, {
      //     fontSize: '20px'
      //   })
      // });
    }
  }

  render(){
    var cards = {
      CardA: {
        elements: [{
          type: 'title',
          text: ['Servicio Integral'],
          style: _.merge({}, Fonts.typeC, {
            paddingBottom: '15px'
          })
        }]
      },
      cardA: {
        elements: [{
          type: 'title',
          text: ['Expertos en el Sector Transportista'],
          style: this.state.style.cardA
        }, {
          type: 'description',
          text: ['Más de 15 años de experiencia.'],
          style: this.state.style.customP
        }],
      },
      cardB: {
        elements:[{
          type: 'title',
          text: ['PERMISOS'],
          style: _.merge({}, Fonts.typeC, {
            paddingBottom: '15px'
          })
        }]
      },
      cardC: {
        elements: [{
          type: 'title',
          text: ['TRÁMITES'],
          style: _.merge({}, Fonts.typeC)
        }]
      },
      cardD: {
        elements: [{
          type: 'title',
          text: ['SEGUROS'],
          style: _.merge({}, Fonts.typeC)
        }]
      }
    };

    var arrowYellowEl = (<a style={this.state.style.moreThanArrowAnchor}>
      <i className="glyphicon glyphicon-menu-right" style={this.state.style.moreThanArrow}></i>
    </a>);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="row blackgroundBlackHoverOpacity">
              <CardA data={cards.CardA} />
            </div>
          </div>
          <div className="col-md-6 col-sm-6" style={this.state.style.zeroPadding}>
            <div className="row" style={this.state.style.zeroMargin}>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={this.state.style.zeroPadding}>
                <CardB data={cards.cardA} />
              </div>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={this.state.style.zeroPadding}>
                <CardC data={cards.cardB} sprite="Permits" />
              </div>
            </div>
            <div className="row" style={this.state.style.zeroMargin}>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={this.state.style.zeroPadding}>
                <CardC data={cards.cardC} sprite="Insurance" />
              </div>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity" style={this.state.style.zeroPadding}>
                <CardC data={cards.cardD} sprite="Procedures" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
