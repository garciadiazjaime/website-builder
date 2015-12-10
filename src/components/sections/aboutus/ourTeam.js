import React, { Component, PropTypes} from 'react';

import Colors from '../../../constants/colors';
import Sprites from '../../../sprites/sprite';
import Fonts from '../../../constants/fonts';
import Card from '../../widgets/card/simpleCard';
import WhyIB from './WhyIB';

export default class OurTeam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        wrapper: {
          background: "url('http://127.0.0.1:3000/images/ourteam-bg.png') no-repeat center bottom",
          backgroundSize: '100% auto',
          margin: '20px 0',
          position: 'relative'
        }
      }
    };
  }


  render(){
    var cards = {
      OurTeam: [{
        type: 'title',
        text: ['Nuestro Equipo'],
        style:  _.merge({}, Fonts.typeE, {
          margin: '0 0 30px 25px'
        })
      },
      {
        type: 'description',
        text: ['Nuestro Equipo de profesionales, estan capacitados para atenderte de forma rápida y eficiente, contacta a uno de nuestros asesores:'],
        style: _.merge({}, Fonts.typeA,{
          marginLeft: '35px'
        })
      }]
    };
    return (
      <div className="container">
        <div className="row" style={this.state.style.wrapper}>
          <WhyIB />
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
            <Card data={cards.OurTeam} />
          </div>
        </div>
      </div>
    );
  }
}