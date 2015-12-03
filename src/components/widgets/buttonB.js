import React, { Component, PropTypes} from 'react';
import Colors from '../../constants/colors';

var btnYellow = {
  backgroundColor: Colors.yellow,
  width: '50px',
  height: '28px',
  display: 'inline-block',
  borderRadius: '20px',
  textAlign: 'center'
};

var moreThan = {
  top: '7px',
  fontSize: '15px',
  fontWeight: 'bold'
};

export default class ButtonB extends Component {

  render(){

    return (<a style={btnYellow}>
      <i className="glyphicon glyphicon-menu-right" style={moreThan}></i>
    </a>);
  }
}
