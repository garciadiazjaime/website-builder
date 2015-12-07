import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Colors from '../../constants/colors';
import Sprites from '../../constants/sprite';


export default class YellowFleck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
      }
    }
  }

  render(){
    var yellowFleck = _.merge(Sprites.General.ArrowBigYellow, {
      position: 'absolute',
      top: '-14px',
      right: '-13px',
      display: 'block'
    });

    return (<div style={yellowFleck}></div>);
  }
}
