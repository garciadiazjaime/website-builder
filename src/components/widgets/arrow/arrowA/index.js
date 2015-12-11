import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Fonts from '../../../../constants/fonts';


export default class ArrowA extends Component {


  render(){
    var style = this.getStyle();

    return (<a style={style.wrapper}>
      <i className="glyphicon glyphicon-menu-right" style={style.arrow}></i>
    </a>);
  }

  getStyle() {
    return {
      wrapper: {
        display: 'inline-block'
      },
      arrow: _.merge({}, Fonts.typeE, {
        top: '22px',
      })
    };
  }
}
