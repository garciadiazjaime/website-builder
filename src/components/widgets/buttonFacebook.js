import React, { Component, PropTypes} from 'react';
import _ from 'lodash';
import Colors from '../../constants/colors';
import Sprites from '../../sprites/sprite.js';


var facebookStyle = _.merge(Sprites.General.Facebook, {
  display: 'inline-block'
});

export default class ButtonFacebook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        title: {
          fontFamily: 'noto-sans-bold',
          fontSize: '16px',
          color: 'white'
        },
        iconWrapper: {
          top: '5px',
          left: '20px',
          position: 'relative'
        }
      }
    }
  }

  render(){
    var titleEl = this.getTitle(this.props.type);
    return (<a>
      <span style={this.state.style.title}>{titleEl}</span>
      <span style={this.state.style.iconWrapper}>
        <i style={facebookStyle}></i>
      </span>
    </a>);
  }

  getTitle(type) {
    switch (type) {
      case 'TEXT':
        return 'Síguenos en Facebook';
      default:
        return null;

    }
  }
}
