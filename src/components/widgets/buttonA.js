import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';


export default class ButtonA extends Component {

  render(){
    var style = this.getStyle();

    // if (this.props.style && this.props.style === 'B') {
    //   backgroundStyle = _.merge({}, backgroundStyle, {
    //     backgroundColor: 'white',
    //     color: Colors.purple
    //   });
    // }
    // TODO: continue from here
    return (<a style={style.backgroundStyle} className="btnHover">
          <span style={style.textStyle}>{this.props.text}</span>
          <i className="glyphicon glyphicon-menu-right" style={style.iconStyle}></i>
        </a>);
  }

  getStyle(type) {
    switch (type) {
      case 'A':

        break;
      default:
        return {
          backgroundStyle: _.merge(Fonts.typeH, {
            backgroundColor: Colors.yellow,
            display: 'inline-block',
            borderRadius: '20px',
            padding: '8px 18px'
          }),
          textStyle: {
            paddingRight: '40px'
          },
          iconStyle: {
            top: '2px',
            fontSize: '12px',
            fontWeight: 'bold'
          }
        };
    }
  }
}
