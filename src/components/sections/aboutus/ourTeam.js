import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';
import URLs from '../../../constants/urls';
import Fonts from '../../../constants/fonts';
import Card from '../../widgets/card/simpleCard';

export default class OurTeam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        wrapper: {
          backgroundImage: "url('" + URLs.IMAGES + "')",
          background: "url('" + URLs.IMAGES + "ourteam-bg.png') no-repeat center bottom",
          backgroundSize: '100% auto',
          marginTop: '-150px',
          paddingTop: '250px',
          position: 'relative',
          marginBottom: '100px',
          zIndex: '-1'
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
            <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
              <Card data={cards.cardA} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  getCards(){
    return {
      cardA: {
        wrapper: {
          style: {
            marginLeft: '35px'
          }
        },
        elements:[{
          type: 'title',
          text: ['Nuestro Equipo'],
          style: _.merge({}, Fonts.typeE,{
            margin: '0 0 30px'
          })
        },
        {
          type: 'description',
          text: ['Nuestro Equipo de profesionales, estan capacitados para atenderte de forma rápida y eficiente, contacta a uno de nuestros asesores:'],
          style: _.merge({}, Fonts.typeA)
        }]
      }
    }
  }
}
