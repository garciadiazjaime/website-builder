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
        image: _.merge ({}, Sprites.AboutusMembers.MemberAvatar, {
          margin: '35px auto 0'
        }),
        wrapper: {
          style: {
            padding: '0 40px 50px',
            textAlign: 'center'
          }
        },
        elements: [{
          type: 'title',
          text: ['Nombre Apellido'],
          style: _.merge({}, Fonts.typeO, {
            colors: Colors.red
          })
        },
        {
          type: 'subtitle',
          text: ['Puesto'],
          style: _.merge({}, Fonts.typeA,{
            borderBottom: '1px solid #383939',
            paddingBottom: '11px',
            marginTop: '0',
            width: '100px',
            display: 'inline-block'
          })
        }, {
          type: 'description',
          text: ['998-0009-33<br />mail@dominio.com'],
          style: _.merge({}, Fonts.typeA,{
            colors: Colors.red
          })
        }]
      }
    };
  }
}