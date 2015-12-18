import React, { Component, PropTypes} from 'react';

import Sprites from '../../../constants/sprite';
import Colors from '../../../constants/colors';
import Fonts from '../../../constants/fonts';
import CardX from '../../widgets/card/cardX';


export default class OurTeam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        wrapper: {
          background: Colors.yellow,
          position: 'relative',
          padding: '100px 0'
        }
      }
    };
  }


  render() {
    var cards = this.getCards();
   
    return (
      <div style={this.state.style.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 col-sm-3 col-sm-offset-0">
              <CardX data={cards.cardA} />
            </div>
            <div className="col-xs-10 col-xs-offset-1 col-sm-3 col-sm-offset-0">
              <CardX data={cards.cardA} />
            </div>
            <div className="col-xs-10 col-xs-offset-1 col-sm-3 col-sm-offset-0">
              <CardX data={cards.cardA} />
            </div>
            <div className="col-xs-10 col-xs-offset-1 col-sm-3 col-sm-offset-0">
              <CardX data={cards.cardA} />
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
            padding: '35px 40px 50px',
            textAlign: 'center'
          }
        },
        elements: [{
          type: 'title',
          text: ['Nombre Apellido'],
          style: {
            colors: Colors.red
          }
        },
        {
          type: 'subtitle',
          text: ['Puesto'],
          style: {
            colors: Colors.red
          }
        }, {
          type: 'description',
          text: ['998-0009-33', 'mail@dominio.com'],
          style: {
            colors: Colors.red
          }
        }]
      }
    };
  }
}