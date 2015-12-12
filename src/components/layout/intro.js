import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Sprites from '../../constants/sprite';
import {FontA} from '../../constants/fonts';
import Logo from './logo';
import SimpleCard from '../widgets/card/simpleCard';
import UtilRD from '../../utils/rd';


export default class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: this.getStyle('INIT')
    }
  }

  componentDidMount(){
    const utilRD = new UtilRD();

    if (utilRD.isPhone(document.body.clientWidth)) {
      this.setState({
        style: _.merge({}, this.state.style, this.getStyle('PHONE'))
      });
    }
  }

  render(){
    var style = this.getStyle();
    var cards = this.getCards();

    return (
      <div className="container" style={style.wrapper}>
          <div className="row">
            <div className="col-md-10 col-sm-8 col-xs-12">
              <div style={style.logoWrapper}>
                <Logo />
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-12">
              <div className="pull-right">
                <SimpleCard data={cards.cardA} />
                <span style={style.arrow}></span>
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
            display: 'inline-block'
          }
        },
        elements: [{
          type: 'description',
          text: ['Te vemos grande'],
          style: _.merge({}, FontA.getVariation('IntroA'), {
            display: 'inline-block',
            marginTop: '10px'
          })
        }]
      }
    }
  }

  getStyle(type) {
    switch (type) {
      case 'INIT':
        return {
          wrapper: {
            height: '160px',
            paddingTop: '57px'
          }
        }
      case 'PHONE':
        return {
          wrapper: {
            height: '120px',
            paddingTop: '20px'
          }
        };
        break;
      default:
        return {
          wrapper: this.state.style.wrapper,
          logoWrapper: {
            paddingLeft: '35px'
          },
          arrow: _.merge({}, Sprites.General.ArrowSmallYellow, {
            display: 'inline-block',
            position: 'relative',
            top: '-8px'
          })
        };
    }
  }
}
