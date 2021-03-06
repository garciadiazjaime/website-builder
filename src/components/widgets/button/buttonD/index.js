import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Colors from '../../../../constants/colors';
import Sprites from '../../../../constants/sprite';


export default class ButtonD extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    var style = this.getStyle();
    var titleEl = this.getTitle(this.props.type);
    var spriteStyle = this.getSprite(this.props.sprite);

    return (<a>
      <span style={style.title}>{titleEl}</span>
      <span style={style.iconWrapper}>
        <i style={spriteStyle}></i>
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

  getSprite(sprite) {
    switch (sprite) {
      case 'FACEBOOK':
        return _.merge(Sprites.General.Facebook, {
          display: 'inline-block'
        });
      case 'OFFICE':
        return _.merge(Sprites.General.Office, {
          display: 'inline-block'
        });
    }
  }

  getStyle() {
    return {
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
    };
  }
}
