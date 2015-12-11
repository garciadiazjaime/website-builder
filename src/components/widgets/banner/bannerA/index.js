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
      style: this.getStyle('DESKTOP')
    }
  }

  componentDidMount(){
    if (document.body.clientWidth > 320 && document.body.clientWidth < 1024) {
      this.setState({
        style: _.merge({}, this.state.style, this.getStyle('TABLET'))
      });
    }
  }

  render(){
    var cards = this.getCards();

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="row blackgroundBlackHoverOpacity">
              <CardA data={cards.cardA} />
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="row">
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity">
                <CardB data={cards.cardB} />
              </div>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity">
                <CardC data={cards.cardC} sprite="Permits" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity">
                <CardC data={cards.cardD} sprite="Insurance" />
              </div>
              <div className="col-md-6 col-sm-6 blackgroundBlackHoverOpacity">
                <CardC data={cards.cardE} sprite="Procedures" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getStyle(type) {
    switch (type) {
      case 'TABLET':
        return {
          cardBTitle: _.merge({}, this.state.style.cardBTitle, {
            fontSize: '20px',
            marginTop: '30px'
          }),
          cardBWrapper: _.merge({}, this.state.style.cardBWrapper, {
            paddingRight: '40px'
          })
        };
      case 'DESKTOP':
        return {
          cardBTitle: _.merge({}, Fonts.typeD, {
            marginTop: '15px'
          }),
          cardBWrapper: {
            marginTop: '-25px',
            paddingRight: '18px'
          }
        };
      default:
        return null;
    }
  }

  getCards() {
    return {
      cardA: {
        elements: [{
          type: 'title',
          text: ['Servicio Integral'],
          style: _.merge({}, Fonts.typeC, {
            paddingBottom: '15px'
          })
        }]
      },
      cardB: {
        wrapper: {
          style: this.state.style.cardBWrapper
        },
        elements: [{
          type: 'title',
          text: ['Expertos en el Sector Transportista'],
          style: this.state.style.cardBTitle
        }, {
          type: 'description',
          text: ['Más de 15 años de experiencia.'],
          style: _.merge({}, Fonts.typeF, {
            marginTop: '15px',
            marginBottom: '0'
          })
        }],
      },
      cardC: {
        elements:[{
          type: 'title',
          text: ['PERMISOS'],
          style: _.merge({}, Fonts.typeC, {
            paddingBottom: '15px'
          })
        }]
      },
      cardD: {
        elements: [{
          type: 'title',
          text: ['TRÁMITES'],
          style: _.merge({}, Fonts.typeC)
        }]
      },
      cardE: {
        elements: [{
          type: 'title',
          text: ['SEGUROS'],
          style: _.merge({}, Fonts.typeC)
        }]
      }
    };
  }
}
