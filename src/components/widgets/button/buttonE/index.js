import React, { Component, PropTypes} from 'react';
import Colors from '../../../../constants/colors';


export default class ButtonE extends Component {

  render(){
    var style = this.getStyle();

    return (<a style={style.wrapper}>
      <i className="glyphicon glyphicon-menu-right" style={style.icon}></i>
    </a>);
  }

  getStyle() {
    return {
      wrapper: {
        border: '1px solid ' + Colors.yellow,
        width: '35px',
        height: '20px',
        display: 'inline-block',
        borderRadius: '20px',
        textAlign: 'center'
      },
      icon: {
        fontSize: '10px',
        fontWeight: 'bold'
      }
    }
  }
}
