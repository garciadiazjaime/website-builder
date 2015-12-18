import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';
import Fonts from '../../../constants/fonts';
import Card from '../../widgets/card/simpleCard';
import ButtonB from '../../widgets/button/buttonB';

export default class Abstract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        wrapper: {
          background: Colors.red,
          position: 'relative',
          padding: '100px 0 40px'
        },
        whiteBorder: {
          border: 'none',
          background: 'white',
          height: '5px'
        }
      }
    };
  }


  render(){

    var cards = this.getCards();
    return (
      <div style = {this.state.style.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-0">
              <Card data={cards.cardA} />
            </div>
             <div className="col-xs-10 col-xs-offset-1 col-sm-1 col-sm-offset-0">
              <ButtonB />
            </div>
             <div className="col-xs-10 col-xs-offset-1 col-sm-12 col-sm-offset-0">
              <hr style={this.state.style.whiteBorder} />
            </div>
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
          }
        },
        elements: [{
          type: 'title',
          text: ['Conoce nuestros servicios'],
          style: _.merge({}, Fonts.typeP, {
            margin: '0 0 0 50px'
          })
        }]
      },
    };
  }
}
