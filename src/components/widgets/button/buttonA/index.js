import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Colors from '../../../../constants/colors';
import {FontABold} from '../../../../constants/fonts';


export default class ButtonA extends Component {

  render(){
    var style = this.getStyle(this.props.type);

    return (<a style={style.wrapper} className="btnHover">
          <span style={style.title}>{this.props.text}</span>
          <i className="glyphicon glyphicon-menu-right" style={style.icon}></i>
        </a>);
  }

  getStyle(type) {
    var theme = {};
    switch (type) {
      case 'A':
        theme = _.merge(theme, {
          backgroundColor: Colors.yellow,
          color: Colors.blueDark
        });
        break;
      case 'B':
        theme = _.merge(theme, {
          backgroundColor: Colors.white,
          color: Colors.purple
        });
    }

    return {
      wrapper: _.merge({}, FontABold.getVariation('buttonA'), theme, {
        display: 'inline-block',
        borderRadius: '20px',
        padding: '8px 18px'
      }),
      title: {
        paddingRight: '40px'
      },
      icon: {
        top: '2px',
        fontSize: '12px',
        fontWeight: 'bold'
      }
    };
  }
}

ButtonA.propTypes = {
  text: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired
}
