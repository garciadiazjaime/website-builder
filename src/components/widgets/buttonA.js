import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Colors from '../../constants/colors';


var fontStyle = {
  fontFamily: 'noto-sans-bold',
  fontSize: '12px',
};

var backgroundStyle = _.merge(fontStyle, {
  backgroundColor: Colors.yellow,
  display: 'inline-block',
  borderRadius: '20px',
  padding: '8px 18px',
  color: Colors.blueDark
});

var textStyle = {
  paddingRight: '40px'
};

var iconStyle = {
  top: '2px',
  fontSize: '12px',
  fontWeight: 'bold'
};

export default class ButtonA extends Component {

  render(){
    if (this.props.style && this.props.style === 'B') {
      backgroundStyle = _.merge({}, backgroundStyle, {
        backgroundColor: 'white',
        color: Colors.purple
      });
    }

    return (<a style={backgroundStyle} className="btnHover">
          <span style={textStyle}>{this.props.text}</span>
          <i className="glyphicon glyphicon-menu-right" style={iconStyle}></i>
        </a>);
  }
}
