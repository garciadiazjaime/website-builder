import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';
import Fonts from '../../../constants/fonts';
import Card from '../../widgets/card/simpleCard';
import YellowFleck from '../../widgets/YellowFleck';

export default class Mission extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        wrapper: _.merge({}, Fonts.typeA,{
          backgroundColor: Colors.blueDark,
          textAlign: 'center',
          padding: '60px 0 80px',
          position: 'relative'
        }),
      }
    };
  }

  
  render(){
    var cards = this.getCards();
    return (
      <div className="container">
        <div className="row" style={this.state.style.wrapper}>
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
            <Card data={cards.cardA} />
          </div>
          <YellowFleck />
        </div>
      </div>
    );
  }

  getCards() {
    return {
      cardA: {
        wrapper: {
          style: {
            marginLeft: '35px'
          }
        },
        elements: [{
            type: 'title',
            text: ['Nuestra Misión'],
            style:  _.merge({}, Fonts.typeG, {
              margin: '0 0 30px'
            })
          },
          {
            type: 'subtitle',
            text: ['Ayudarte a crecer'],
            style: _.merge({}, Fonts.typeH,{
              margin: '0 0 22px'
            })
          },
          {
            type: 'description',
            text: ['Ofrecer una amplia gama de productos y servicios de excelencia con coberturas y vigencias adaptables a todos nuestros clientes para así garantizar su total satisfacción e impulsar su crecimiento. En interbrokers te vemos grande.'],
            style: _.merge({}, Fonts.typeI)
        }]
      }
    };
  }
}
