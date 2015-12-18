import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Sprites from '../../../../constants/sprite';


export default class Fleck extends Component {

  render(){
    var style = this.getStyle();

    return (<div style={style.wrapper}></div>);
  }

  getStyle() {
    return {
      wrapper: _.merge(Sprites.General.ArrowBigYellow, {
        position: 'absolute',
        top: '-14px',
        right: '-13px',
        display: 'block'
      })
    }
  }
}
