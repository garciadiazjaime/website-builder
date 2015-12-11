import React, { Component, PropTypes} from 'react';
import Colors from '../../../../constants/colors';


export default class ButtonB extends Component {

  render(){
    var style = this.getStyle();

    return (<a style={style.wrapper}>
      <i className="glyphicon glyphicon-menu-right" style={style.icon}></i>
    </a>);
  }

  getStyle() {
    return {
      wrapper: {
        backgroundColor: Colors.yellow,
        width: '50px',
        height: '28px',
        display: 'inline-block',
        borderRadius: '20px',
        textAlign: 'center'
      },
      icon: {
        top: '7px',
        fontSize: '15px',
        fontWeight: 'bold'
      }
    }
  }
}
